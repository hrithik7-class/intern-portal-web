import express from 'express'
import User from '../models/userModel.js'
import generateToken from '../utils/jwt.js'
import bcrypt from 'bcryptjs'
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 3600000 // 1 hour
        });

        res.json({
            user: { name: user.name, email: user.email, referralCode: user.referralCode },
        });
    } catch (error) {
        res.status(400).json({ msg: 'Invalid Credentials', error: error })
    }

})


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({
            name,
            email,
            password: hashedPassword,
            referralCode: `${name.toLowerCase().replace(/\s/g, '')}2025`,
            donationsRaised: 0,
        });
        await user.save();

        // Generate JWT and set in HTTP-only cookie
        const token = generateToken(user);
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: true,
            sameSite: none,
            maxAge: 3600000 // 1 hour
        });

        res.status(201).json({
            user: { name: user.name, email: user.email, referralCode: user.referralCode },
        });

    } catch (error) {
        res.status(400).json({ msg: 'Invalid Credentials', error: error })
    }
})  


router.post('/logout', (req, res) => {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})


router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            name: user.name,
            referralCode: user.referralCode,
            donationsRaised: user.donationsRaised,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
    
export default router
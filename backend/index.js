import express from 'express'
import dotenv from 'dotenv'
import  authRoutes from './router/auth.js'
import cors from 'cors'
import {db} from './db/db.js'
import User from './models/userModel.js'
import cookieParser from 'cookie-parser'
import path from 'path'
dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000


const __dirname = path.resolve();




db();

const seedUsers = async () => {
  if (process.env.NODE_ENV !== 'development') return;

  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) return; 

    const dummyUsers = [
      {
        name: 'Alice Smith',
        email: 'alice.smith@example.com',
        password: await bcrypt.hash('password123', 10),
        referralCode: 'alice2025',
        donationsRaised: 1000,
      },
      {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        password: await bcrypt.hash('password123', 10),
        referralCode: 'bob2025',
        donationsRaised: 800,
      },
      {
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        password: await bcrypt.hash('password123', 10),
        referralCode: 'charlie2025',
        donationsRaised: 600,
      },
    ];

    await User.insertMany(dummyUsers);
    console.log('Dummy users seeded successfully');
  } catch (error) {
    console.error('Error seeding dummy data:', error);
  }
};

seedUsers();

app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true, // Explicitly allow credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())
app.use(cookieParser());


app.use('/api/auth', authRoutes);


app.get('/api/leaderboard', async (req, res) => {
  const users = await User.find()
    .select('name donationsRaised')
    .sort({ donationsRaised: -1 })
    .limit(10);
  res.json(users);
});

app.get('/',(req,res)=>{
    res.send("Hello World")
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/dist')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
     
})
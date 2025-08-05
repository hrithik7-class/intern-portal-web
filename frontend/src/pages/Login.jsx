import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/slices/authSlice';
import { UserPlus, Loader, Lock, Mail, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaHandHoldingHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';


export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      toast.success("Login successful");
      navigate("/dashboard");
      
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className='flex flex-col  justify-center py-12 sm:px-6 lg:px-8'>
      <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, }}>
        <h2 className='mt-6 text-center text-3xl font-extrabold  bg-gradient-to-r from-purple-400/80 to-blue-600/70
            bg-clip-text text-transparent'>Continue your professional fundraising journey</h2>

      </motion.div>

      <motion.div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <div className='bg-gradient-to-r from-violet-400 to-blue-400 py-8 px-4 shadow sm:rounded-lg sm:px-10 '>
          <form className='space-y-6 ' onSubmit={handleSubmit} >
            <div className="flex  justify-center">
              <Link to="/" >
                <FaHandHoldingHeart className='mt-1 md:mt-2 md:size-16 size-16 text-violet-300  bg-white p-2 rounded-xl 
                  '/>
              </Link>
            </div>
            <h2 className='text-3xl text-white font-bold text-center'>Welcome Back</h2>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-white'>
                Email address
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-gray-800' aria-hidden='true' />
                </div>
                <input
                  id='email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=' block w-full px-3 py-2 pl-10 bg-gray-200 border border-gray-600 
                  rounded-md shadow-sm
                   placeholder-gray-400 focus:outline-none focus:ring-emerald-500 
                   focus:border-emerald-500 sm:text-sm'
                  placeholder='you@example.com'
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-white'>
                Password
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='h-5 w-5 text-gray-800' aria-hidden='true' />
                </div>
                <input
                  id='password'
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=' block w-full px-3 py-2 pl-10 bg-gray-200 border border-gray-600 
                  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
                  placeholder='••••••••'
                />
              </div>
            </div>



            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent 
              rounded-md shadow-sm text-sm font-medium text-white bg-violet-300
               hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-violet-900 transition duration-150 ease-in-out disabled:opacity-50'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
                  Loading...
                </>
              ) : (
                <>
                  <UserPlus className='mr-2 h-5 w-5' aria-hidden='true' />
                  Login
                </>
              )}
            </button>
          </form>

          <p className='mt-8 text-center text-sm text-white'>
            Don't have an account?{" "}
            <Link to='/signin' className='font-medium text-black hover:text-violet-800'>
              SignUp here <ArrowRight className='inline h-4 w-4' />
            </Link>
          </p>
        </div>
      </motion.div>

    </div>
  )
}

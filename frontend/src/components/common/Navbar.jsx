
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { Link } from 'react-router-dom'
import { FaHandHoldingHeart } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import { House, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
function Navbar() {

  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
    toast.success('Logged out successfully');
  };


  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <nav className="bg-white shadow-md py-4 md:px-7 px-4 sticky top-0 z-50 bg-[url('/bg3.png')] ">
      <div className="container mx-auto flex justify-between items-center ease-in-out duration-200">

        <div className="flex items-center justify-start w-1/3">
          <Link to="/dashboard" className=" flex space-x-2  font-bold text-white justify-center items-center ">
            <FaHandHoldingHeart className=' md:mt-2 sm:size-8 size-6 lg:size-10 ' />
            <span className=' text-xs lg:text-3xl  sm:text-xl '>FundRaise Portal</span>
          </Link>
        </div>

        <div className="flex justify-end  items-center font-semibold  lg:text-lg md:text:md text:sm w-2/3 ">
          <div className='flex gap-1  items-center'>

            <Link to={'/dashboard'} className="flex items-center sm:space-x-2 space-x-1  sm:p-3  p-1 rounded-lg">
              <span className='  bg-gradient-to-r from-purple-600/70 to-blue-600/70
              bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500
              transition-all duration-300 ease-in-out'>
                {window.innerWidth >= 768
                  ? (<div className='flex items-center space-x-2'>
                    <House size={20} className='text-violet-400' />
                    <h5>Dashboard</h5>
                  </div>)
                  : <House size={20} className='text-violet-400' />
                }
              </span>
            </Link>

            <Link to={'/leaderboard'} className="flex items-center sm:space-x-2 space-x-1  sm:p-3  p-1 rounded-lg">
              <span className='  bg-gradient-to-r from-purple-600/70 to-blue-600/70
              bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500
              transition-all duration-300 ease-in-out'>
                {window.innerWidth >= 768
                  ? (<div className='flex items-center space-x-2'>
                    <Trophy size={20} className='text-violet-400' />
                    <h5>Leaderboard</h5>
                  </div>)
                  : <Trophy size={20} className='text-violet-400 ' />
                }
              </span>
            </Link>

            <div className='flex flex-col justify-end text-end  font-bold '>
              {(window.innerWidth >= 768 ? <>
                <p className='text-xs text-black'>{user?.name}</p>
                <p className='text-xs text-black'>{user?.referralCode}</p></> : null)}
            </div>


            <button onClick={handleLogout} className='text-lg  bg-gradient-to-r from-violet-400 to-blue-400
             hover:from-blue-500/80 hover:to-violet-500/60 p-2  rounded-md text-white' >
              <span className=' flex items-center space-x-2 font-semibold'>
                {
                  window.innerWidth >= 768
                    ? "Logout"
                    : <IoLogInOutline className='text-xl text-center text-white' />}
              </span>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



import { CopyIcon, CpuIcon, GiftIcon, Mountain, Users } from 'lucide-react';
import { IoAnalytics, IoAnalyticsSharp } from 'react-icons/io5';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';

const OverviewCart = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  const copy = () => {
    navigator.clipboard.writeText(user?.referralCode);
    toast.success('Copied to clipboard');
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className='bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2'>
        <div className='flex justify-between p-2 gap-5'>
          <h3 className='text-lg font-normal'>Referrel Code</h3>
          <span className=' bg-gray-200/70 p-1 bg-blue-200 rounded-lg'><IoAnalytics size={20} className='text-blue-400' /></span>
        </div>
        <div className='flex justify-between p-2 gap-5'>
          <input value={user?.referralCode} readOnly id='referralCode' className="  sm:w-13  outline-none sm:text-xs text-[9px] font-bold" />
          <button onClick={copy} className=' bg-gray-200/70 p-1 rounded-lg'><CopyIcon size={20} /></button>
        </div>
        <p className='text-sm text-gray-500'>Share this code to earn rewards</p>
      </div>

      <div className='bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2'>
        <div className='flex justify-between p-2 gap-5'>
          <h3 className='text-lg font-normal'>Total Raise</h3>
          <span className='  p-1 bg-emerald-200/70 rounded-lg'><GiftIcon size={20} className='text-emerald-400' /></span>
        </div>
        <div className='flex justify-between p-2 gap-5'>
          <p className='text-md text-black font-semibold '>${user?.donationsRaised} this Month</p>
          <span className=' bg-gray-200/70 p-1 rounded-lg'><IoAnalyticsSharp size={20} /></span>
        </div>
        <p className='text-md  text-gray-400'>${user?.donationsRaised}</p>
      </div>

      <div className='bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2'>
        <div className='flex justify-between p-2 gap-5'>
          <h3 className='text-lg font-normal'>Your Rank</h3>
          <span className=' bg-yellow-200/70 p-1  rounded-lg'><Mountain size={20} className='text-yellow-400' /></span>
        </div>
        <div className='flex justify-between p-2 gap-2'>

          <span className=' text-xl font-bold text-black'>3rd Place</span>
        </div>
        <p className='text-sm text-gray-500'>Out of the interns</p>
      </div>

      <div className='bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2'>
        <div className='flex justify-between p-2 gap-5'>
          <h3 className='text-lg font-normal'>Active Days</h3>
          <span className=' bg-pink-200/70 p-1  rounded-lg'><Users size={20} className='text-pink-400' /></span>
        </div>
        <div className='flex justify-between p-2 gap-5'>

          <span className=' text-lg font-semibold text-black'>1</span>
        </div>
        <p className='text-sm text-gray-500'>Since you joined</p>
      </div>
    </>
  )
}

export default OverviewCart
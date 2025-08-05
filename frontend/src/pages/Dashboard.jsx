import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/slices/authSlice';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {   GiftIcon, UserCircle } from 'lucide-react';
import OverviewCart from '../components/dashboardComponents/OverviewCart';
import RewardSection from '../components/dashboardComponents/RewardSection';
import AnimatedSection from '../components/AnimationSection';


function Dashboard() {


  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow container mx-auto space-y-6 px-4 py-8 max-w-7xl">

        <div className=' bg-gradient-to-r from-violet-400/70 to-blue-500/60 shadow-md rounded-xl p-12 flex justify-between items-center '>
          <AnimatedSection className='flex flex-col space-y-2'>
            <h2 className="sm:text-4xl text-xl font-bold">Welcome back,{user?.name}! </h2>
            <p className='sm:text-xl text-xs text-black/70'>Keep up the amezing work raising funds for our cause</p>
          </AnimatedSection>
          <UserCircle className='sm:size-12  size-0 '/>
        </div>

        <AnimatedSection  className=' grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-8 justify-evenly '>
          <OverviewCart />
        </AnimatedSection>

        <AnimatedSection className='bg-gradient-to-r from-violet-400/70 to-blue-500/60 shadow-md rounded-xl p-6 flex-col '>
          <div className='flex justify-between w-full  text-white'>
            <h2 className='text-lg font-bold'>Next Rewards</h2>
            <span className=' bg-black/20 rounded-full p-1 '><GiftIcon size={24} /></span>
          </div>
          <p className='text-white text-sm font-medium mt-2 '>Fund Raising Hero</p>
          <p className='text-white text-sm font-medium mt-1 '>Raise $5000</p>

          <div className='flex justify-between w-full mt-4  text-white'>
            <p className='text-md font-bold'>Raise $5000</p>
            <p className='text-md font-bold'>Collect ${user?.donationsRaised}</p>
          </div>
          <input type='range' min={0} max={5000} value={user?.donationsRaised} className='w-full mt-2  'readOnly />

        </AnimatedSection>

        <AnimatedSection className='bg-white shadow-md rounded-lg p-6 flex  flex-col gap-3'>

          <div className='flex justify-start gap-3 '>
            <GiftIcon size={24} className='text-violet-400' />
            <h2 className='md:text-lg text-sm font-bold'>Reward and Achievement</h2>
          </div>
         
        <RewardSection/>

          <div className='grid lg:grid-cols-4 grid-cols-2  justify-between w-full mt-2  text-black/70 '>
            <div className='flex flex-col space-y-1 items-center'>
              <p className='text-emerald-500 text-lg font-semibold'>2</p>
              <p className='text-sm font-medium'>Unlocked</p>
            </div>

            <div className='flex flex-col  items-center'>
              <p className='text-blue-500 text-lg font-semibold'>4</p>
              <p className='text-sm font-medium'>Remaining</p>
            </div>

            <div className='flex flex-col  items-center'>
              <p className='text-violet-900 text-lg font-semibold'>33%</p>
              <p className='text-sm font-medium'>Complete</p>
            </div>

            <div className='flex flex-col  items-center'>
              <p className='text-orange-600 text-lg font-semibold'>$589</p>
              <p className='text-sm font-medium'>To Next</p>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;

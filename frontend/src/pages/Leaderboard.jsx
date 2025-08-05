import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Flame, Star, Trophy } from 'lucide-react';
import Position from '../components/LeaderboardComponents/Position';
import Score from '../components/LeaderboardComponents/Score';
import AnimatedSection from '../components/AnimationSection';

function Leaderboard() {

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow container mx-auto space-y-7  py-8 max-w-7xl">

        <div  className='bg-gradient-to-r from-violet-400/70 to-blue-500/60 shadow-md rounded-xl p-6 flex flex-col 
        '>
          <AnimatedSection className='flex  gap-3 justify-center items-center text-center '>
            <h2 className="md:text-3xl text-xl font-bold"><Flame className='text-red-500/70' /></h2>
            <p className='lg:text-xl sm:text-md text-xs font-semibold border border-violet-600/10 bg-white/10 shadow-inner
             rounded-full py-1 px-3  text-white/70 '>Elite competition</p>
          </AnimatedSection>

          <AnimatedSection className='flex  gap-3 justify-center items-center text-center'>
            <h2 className="md:text-3xl text-xl font-bold"><Trophy className='text-yellow-400/80 size-6 md:size-12' /></h2>
            <p className='lg:text-5xl sm:text-2xl text-lg font-bold   py-1 px-3  text-white '>Elite Leaderboard</p>
          </AnimatedSection>
          <span className='sm:text-xl text-sm text-center py-1 px-3  text-white/90'><AnimatedSection>Witness the pinnacle 
            of fundraising excellence.See how <br /> the top performers are  reshaping the industry.</AnimatedSection></span>
        </div>

        <div className='bg-white  shadow-md rounded-xl p-6 flex   flex-col 
        hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2  '>
          <div className='flex justify-between '>
            <AnimatedSection className='flex gap-2 justify-start items-center text-center'>
              <div className='text-emerald-500 sm:size-8 size-5' />
              <div className='sm:text-lg text-xs font-bold'>Your Elite Position</div>
            </AnimatedSection>
            <div className="md:text-lg text-white text-sm  font-medium px-1 text-center
             rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 py-1 "><AnimatedSection>Third Place</AnimatedSection></div>
          </div>

          <div className='flex  justify-between border shadow-md bg-emerald-100/80 p-4 mt-4 rounded-xl  '>
            <AnimatedSection className='flex justify-center items-center gap-3 '>
              <div className='flex flex-col  '>
                <div className='bg-gradient-to-r from from-yellow-400  to-orange-400 px-4 py-3 rounded-md  '>
                  <Trophy className='text-white sm:size-6 size-4' />
                  <span className='sm:text-lg text-sm font-semibold text-white'>#3</span>
                </div>
              </div>
              <div className='flex flex-col gap-1 '>
                <span className='sm:text-md text-sm font-bold'>XYZ</span>
                <span className='text-xs text-emerald-500 sm:ml-2  ml-1'>xyz2025</span>
                <span className=' text-xs font-semibold '>Elite Fundraising Intern</span>
              </div>

            </AnimatedSection>
            <AnimatedSection className='flex flex-col text-end'>
              <span className='sm:text-2xl text:md font-semibold text-emerald-700'>$4,343</span>
              <span className='text-sm font-medium'>Total Raised</span>
              <span className='sm:text-[16px]  text-xs text-emerald-700 '> 18% this month</span>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection>
          <Position />
        </AnimatedSection>

        <AnimatedSection>
          <Score />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default Leaderboard;
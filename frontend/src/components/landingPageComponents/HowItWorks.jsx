import React from 'react'

const HowItWorks = () => {
  return (
              <div className="container mx-auto px-4">
            <h2 className="  text-center  text-6xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className='text-center text-3xl font-normal text-gray-600 mb-20 '>Get started in just four simple step</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-10">

              <div className="text-center  items-center flex flex-col">
                <div className='bg-[url("/public/bg3.png")] max-w-16  rounded-lg h-16  mb-6  hover:shadow-2xl transition-all
                   duration-500 border border-gray-100 group hover:-translate-y-1 '>
                  <h2 className=' text-3xl font-bold   text-center p-5 '>
                    01
                  </h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sign Up & Get Onboarded</h3>
                <p className='text-xl font-normal'>Create your account and complete our comprehensive onboarding process to
                  understand your role and goals to make decision.</p>
              </div>

              <div className="text-center  items-center flex flex-col">
                <div className='bg-[url("/public/bg3.png")] max-w-16  rounded-lg h-16  mb-6 hover:shadow-2xl transition-all
                   duration-500 border border-gray-100 group hover:-translate-y-1 '>
                  <h2 className=' text-3xl font-bold   text-center p-5 '>
                    02
                  </h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Get Your Referral Code</h3>
                <p className='text-xl font-normal'>Receive your unique referral code and start building your network. Earn bonus rewards
                  for every successful referral and unlock exclusive benefits.</p>
              </div>

              <div className="text-center  items-center flex flex-col">
                <div className='bg-[url("/public/bg3.png")] max-w-16  rounded-lg h-16  mb-6 hover:shadow-2xl transition-all
                   duration-500 border border-gray-100 group hover:-translate-y-1 '>
                  <h2 className=' text-3xl font-bold   text-center p-5 '>
                    03
                  </h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Set Goal & Start Fundraising</h3>
                <p className='text-xl font-normal'>Work with our team to establish realistic targets and use our tools to reach potential
                  donors effectivelya and chances to get funded.</p>
              </div>

              <div className="text-center  items-center flex flex-col">
                <div className='bg-[url("/public/bg3.png")] max-w-16  rounded-lg h-16  mb-6 hover:shadow-2xl transition-all
                   duration-500 border border-gray-100 group hover:-translate-y-1 '>
                  <h2 className=' text-3xl font-bold   text-center p-5 '>
                    04
                  </h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Trace Progress & Earn Rewards</h3>
                <p className='text-xl font-normal'>Monitor your performance in real-time, unlock achievements, and earn tangible rewards
                  as you hit milestones that will motivate you to keep going.</p>
              </div>

            </div>
          </div>
  )
}

export default HowItWorks
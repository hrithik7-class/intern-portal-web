import React from 'react'
import { IoAnalytics } from 'react-icons/io5';
import { MdOutlineElectricMoped } from 'react-icons/md';
import { CpuIcon, Crown, Lock, Star, Trophy } from 'lucide-react';
const RewardSection = () => {
     const Data = [
    { id: 1, logo: <Star size={24} />, logoAch: < Trophy size={12} />, title: "Welcome Badge", Raise: 10, target: 10, progress: 100, unlocked: true, color: 'bg-green-500' },
    { id: 2, logo: <IoAnalytics size={24} />, logoAch: < Trophy size={12} />, title: "Rising Star", Raise: 1000, target: 1000, progress: 100, unlocked: true, color: 'bg-green-500' },
    { id: 3, logo: <MdOutlineElectricMoped size={24} />, logoAch: < Lock size={8} />, title: "Fundraising Hero", Raise: 4000, target: 5000, progress: 89, unlocked: false, color: 'bg-gray-500' },
    { id: 4, logo: <CpuIcon size={24} />, logoAch: < Lock size={12} />, title: "Champion Fundraiser", Raise: 8000, target: 10000, progress: 74, unlocked: false, color: 'bg-gray-500' },
    { id: 5, logo: <Crown size={24} />, logoAch: < Lock size={12} />, title: "Elite Contributor", Raise: 11000, target: 20000, progress: 51, unlocked: false, color: 'bg-gray-500' },
    { id: 6, logo: <Crown size={24} />, logoAch: < Lock size={12} />, title: "Legendary Fundraiser", Raise: 13000, target:30000, progress: 27, unlocked: false, color: 'bg-gray-500' },

  ]

  return (
    <>
     <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-4 items-center sm:border-b-2   border-violet-200 sm:p-5 p-1'>
            {Data && Data.map((item, id) => (
              <div key={id} className=' flex  flex-col gap-3  rounded-md  shadow-md border-emerald-100/70 sm:p-4 p-2 hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2 '>
                <div  className='flex justify-end '><span className={` ${item.color} text-white  rounded-full  p-1`}>{item.logoAch}</span></div>
                <div className='flex justify-start gap-3  items-center text-center'>
                  <span className='bg-emerald-500 text-white rounded-full p-2 mb-3'>{item.logo}</span>
                  <p className='text-sm mb-[-20] font-medium'>{item.title}</p>
                </div>
                <p className='text-sm font-medium'>Raise ${item.Raise}</p>
                <div className=' mt-1 flex justify-between ' >
                  <p className='text-sm font-medium'>Target: ${item.target}</p>
                  <p className='text-sm font-medium'>{item.progress}%</p>
                </div>
                <input type='range' min={0} max={item.target} value={item.Raise} className='mt-2 w-full' readOnly />
              </div>
            ))}
          </div></>
  )
}

export default RewardSection
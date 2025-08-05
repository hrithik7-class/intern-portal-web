import { Award, CircleDotDashed, Users } from 'lucide-react';

const Position = () => {

  const Data = [
     { id: 1, logo: <Users />, status: "Live", stage: "100", title: "Elite Competition", color: "bg-blue-200",textColor:"text-blue-400" }, 
     { id: 2, logo: <CircleDotDashed />, status: "Active", stage: "$2.8M", title: "Total Raised", color: "bg-green-200",textColor:"text-green-400" },
    { id: 3, logo: <Award />, status: "Upadte", stage: "97%", title: "Sccuess Rate", color: "bg-violet-100",textColor:"text-violet-400" },
    
  ]
  return (
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-start h-full items-stretch gap-8 
        '>
          {Data && Data.map((item, key) => (
            <div key={key} className='bg-white  shadow-md rounded-xl p-8 flex  flex-col gap-3 h-full hover:shadow-2xl transition-all duration-500 border
                border-gray-100 group hover:-translate-y-2  '>
              <div key={key} className='flex justify-between p-2  '>
                <span className={`${item.color} ${item.textColor}  text-white  flex items-center justify-center rounded-md p-2  `}>{item.logo}</span>
                <span className={` ${item.color} ${item.textColor} w-12 h-7 py-1 text-center rounded-md text-xs `}>{item.status}</span>
              </div>
              <span className='text-lg font-bold'>{item.stage}</span>
              <span className='text-[18px]  text-black/80 font-medium'>{item.title}</span>
            </div>
          ))}
        </div>
  )
}

export default Position
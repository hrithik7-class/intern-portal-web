
import { FaCheckCircle } from "react-icons/fa";
import AnimatedSection from "../AnimationSection";

const AboutUs = () => {

  return (
                <div className='flex md:flex-row flex-col px-8  gap-12 items-center justify-center  '>
              <AnimatedSection className='flex flex-col  mb-7 '>
               <div className='max-w-2xl'>
                 <h2 className="text-5xl font-bold mb-8"> About FundRaise Portal</h2>
                <p className='text-xl mb-7  font-medium'>Founded by successful alumni who revolutionized the fundraising 
                  industry,FundRaise Portal represents the pinnacle of professional
                   development platforms for ambitious students.
                </p>
                <p className='text-xl mb-7 font-medium'>We combine Silicon Valley innovation with proven methodologies,
                   creating an ecosystem where exceptional talent thrives and industry 
                   leaders are born.
                </p>
               </div>
              </AnimatedSection>

              <div className='flex flex-col  order-2'>
                 <div className='max-w-2xl'>
                  <div className=' flex flex-wrap border-opacity-5  bg-white/10 rounded-lg p-8'>
                    <AnimatedSection className='text-3xl font-bold mb-4'>Platform Excellence</AnimatedSection>
                    <AnimatedSection className='flex  gap-2  mt-5'>
                        <FaCheckCircle className=' mt-1 text-emerald-600' size={20}/>
                      <span className='text-xl font-medium mr-4'>Executive-level training and mentorship programs</span>
                    </AnimatedSection>

                      <AnimatedSection className='flex  gap-2  mt-5'>
                        <FaCheckCircle className=' mt-1 text-emerald-600' size={20}/>
                      <span className='text-xl font-medium mr-4'>Advanced AI-powered performance analytics</span>
                    </AnimatedSection>

                      <AnimatedSection className='flex  gap-2  mt-5'>
                        <FaCheckCircle className=' mt-1 text-emerald-600' size={20}/>
                      <span className='text-xl font-medium mr-4'>Premium rewards and industry recognition</span>
                    </AnimatedSection>

                      <AnimatedSection className='flex  gap-2  mt-5'>
                        <FaCheckCircle className=' mt-1 text-emerald-600' size={20}/>
                      <span className='text-xl font-medium mr-4'>Exclusive network of high-achievers</span>
                    </AnimatedSection>

                      <AnimatedSection className='flex  gap-2  mt-5'>
                        <FaCheckCircle className=' mt-1 text-emerald-600' size={20}/>
                      <span className='text-xl font-medium mr-4'>Strategic referral program with premium benefits</span>
                    </AnimatedSection>
                  </div>
                 
               </div>
              </div>
            </div> 
  )
}

export default AboutUs
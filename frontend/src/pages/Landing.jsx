import Footer from '../components/common/Footer';
import Hero from '../components/landingPageComponents/Hero';
import WhyInternChooseUs from '../components/landingPageComponents/WhyInternChooseUs';
import HowItWorks from '../components/landingPageComponents/HowItWorks';
import SuccessStory from '../components/landingPageComponents/SuccessStory';
import AboutUs from '../components/landingPageComponents/AboutUs';
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import AnimatedSection from '../components/AnimationSection';




function Landing() {

  const howItWorks = useRef(null);
  const aboutUS = useRef(null);
  const successStories = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>

      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50 bg-[url('/bg3.png')] ">
          <div className="container mx-auto flex justify-between items-center ease-in-out duration-200">
            <Link to="/" className=" flex space-x-2  font-bold text-white ">
              <FaHandHoldingHeart className='mt-1 md:mt-2 md:size-8 size-4' />
              <span className=' text-sm md:text-3xl '>FundRaise Portal</span>
            </Link>
            <div className="flex space-x-5 items-center font-semibold lg:text-lg md:text:md text:sm">

              <Link to="#about-us" className="flex items-center sm:space-x-2 space-x-1 text-white ">
                <button onClick={() => scrollToSection(aboutUS)} className='hidden sm:block  bg-gradient-to-r from-purple-600/70 to-blue-600/70
            bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500
            transition-all duration-300 ease-in-out'>About Us</button>
              </Link>

              <Link to="#how-it-works" className="flex items-center sm:space-x-2 space-x-1 text-white ">
                <button onClick={() => scrollToSection(howItWorks)} className='hidden sm:block  bg-gradient-to-r from-purple-600/70 to-blue-600/70
           bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500
           transition-all duration-300 ease-in-out'>How It Works</button>
              </Link>
              <Link to="#success-stories" className="flex items-center sm:space-x-2 space-x-1 text-white ">
                <button onClick={() => scrollToSection(successStories)} className='hidden sm:block  bg-gradient-to-r from-purple-600/70 to-blue-600/70
            bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-500
            transition-all duration-300 ease-in-out'>Success Stories</button>
              </Link>

              <Button asChild className='text-xl bg-gradient-to-r from-violet-400 to-blue-400 hover:from-violet-600 hover:to-blue-600'>
                <Link to="/login">
                  <IoLogInOutline className='text-xl  text-white  sm:hidden' />
                  <span className='hidden sm:block'>Login</span></Link>
              </Button>

            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <section id='hero' className="bg-blue-100 py-20 text-center bg-[url('/public/bg3.png')]">
            <Hero />
          </section>

          <AnimatedSection id="whyChooseUs" className=" py-16 bg-white mt-10">
            <WhyInternChooseUs />
          </AnimatedSection>

          <section ref={howItWorks}>
            <AnimatedSection id="howItWorks" className="py-16 ">
              <HowItWorks />
            </AnimatedSection>
          </section>


          <section ref={successStories}>
            <AnimatedSection id="successStories" className="py-16 bg-[#BABFF7]/[0.2]">
              <SuccessStory />
            </AnimatedSection>
          </section>

          <section ref={aboutUS} id="aboutUs" className="py-16  inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
            <AboutUs />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
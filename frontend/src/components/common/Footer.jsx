import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineMailLock } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 mt-12">
        <div >
          <div to="/" className=" flex space-x-2  font-bold text-white ">
            <FaHandHoldingHeart className='mt-1 md:mt-2 md:size-8 size-4 text-violet-400' />
            <span className=' text-sm md:text-3xl '>FundRaise Portal</span>
          </div>
          <p className='text-sm md:text-xl mt-5'>Empowering exceptional talent through innovative technology and
            comprehensive professional development programs.</p>
            <div className='flex gap-3 mt-8'>
              <Link to="#" className='py-3 px-4 bg-white/10 rounded-md hover:bg-violet-500 ease-linear duration-200'>
              <FaFacebook sm:size={25}  size={16}/>
              </Link>
              <Link to="#" className='py-3 px-4 bg-white/10 rounded-md hover:bg-violet-500 ease-in-out duration-200'>
              <FaInstagram sm:size={25} size={16} />
              </Link>
              <Link to="#" className='py-3 px-4 bg-white/10 rounded-md hover:bg-violet-500 ease-in-out duration-200'>
              <FaSquareXTwitter sm:size={25} size={16} />
              </Link>
              <Link to="#" className='py-3 px-4 bg-white/10 rounded-md hover:bg-violet-500 ease-in-out duration-200'>
              <FaLinkedinIn sm:size={25}  size={16}/>
              </Link>
            </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-5">Platform</h3>
          <ul className="space-y-2">
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal">Executive Dashboard</Link></li>
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal">Advanced Analytics</Link></li>
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal ">Elite Leaderboard</Link></li>
            <li><Link to="#hero" className="hover:text-violet-400  sm:text-xl text-md font-normal">Elite Leaderboard</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-5">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal">Training Academy</Link></li>
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal">Strategic Frameworks</Link></li>
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal ">Success Case Studies</Link></li>
            <li><Link to="#hero" className="hover:text-violet-400 sm:text-xl text-md font-normal">Knowledge Base</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-5">Contact</h3>
          <div className='flex  space-x-3 mb-2'>
            <MdOutlineMailLock className='text-2xl text-violet-400' />
            <p className='sm:text-xl text-md'>fundraise5@gmail.com</p>
          </div>

          <div className='flex  space-x-3 mb-3 '>
            <IoCallOutline className='text-2xl text-violet-400' />
            <p className='sm:text-xl text-md'>+1-8008-FUNDRAISE</p>
          </div>

          <div className='flex  space-x-3 '>
            <FaMapMarkerAlt className='text-2xl text-violet-400' />
            <p className='sm:text-xl text-md'>Navi Mumbai, India</p>
          </div>
        </div>

      </div>



      <div className="text-center text-lg mt-16">
        <p>&copy; 2025 FundRaiser. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
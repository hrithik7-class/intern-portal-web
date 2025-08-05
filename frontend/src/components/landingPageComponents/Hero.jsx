import { Link } from 'react-router-dom';
import Button from '../Button';
import { GiJourney } from "react-icons/gi";
import AnimatedSection from '../AnimationSection';

const Hero = () => {
  return (
          <AnimatedSection className="container mx-auto px-4">
            <h1 className="text-4xl md:text-8xl font-bold   mb-4
            bg-gradient-to-r from-purple-400/70 to-blue-600/70
           bg-clip-text text-transparent">
              Professional Fundraising <br />Platform for Future Leaders
            </h1>
            <p className="text-lg md:text-3xl text-black/60 mb-12">
              Join our exclusive intern program designed for ambitious students.
              <br /> Master the art of fundraising, track your progress with cutting-edge
              analytics, and compete with peers while building your professional legacy.
            </p>
            <Button asChild size="lg" className='bg-gradient-to-r from-violet-300 to-blue-400 
             hover:bg-gradient-to-r hover:from-violet-400 hover:to-blue-600 mb-16 flex space-x-2 
             hover:shadow-2xl transition-all ease-linear duration-500   group hover:-translate-y-0.3' >
              <GiJourney size={36}  />
              <Link to="/signin" className='text-xl'>Start Your Journey</Link>
            </Button>
          </AnimatedSection>
  )
}

export default Hero
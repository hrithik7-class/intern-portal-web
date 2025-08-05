import { Link } from "react-router-dom";
import { FaHandHoldingHeart } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div
            className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-violet-400'
            style={{ backgroundImage: `url('/needs.jpg')` }}
        >
            <header className='absolute top-0 left-0 p-4 bg-black w-full '>
                <Link to={"/dashboard"}>
                <FaHandHoldingHeart  className='h-8 size-12' />
                    
                </Link>
            </header>
            <main className='text-center error-page--content z-10 bg-black/40 rounded-xl p-3'>
                <h1 className='md:text-7xl text-5xl font-semibold mb-4 text-white'>Lost your way?</h1>
                <p className='mb-6 md:text-xl text-md text-white'>
                    Sorry, we can't find that page. You'll find lots to explore on the home page.
                </p>
                <Link to={"/dashboard"} className='bg-slate-300 text-black font-semibold py-2 px-4 rounded '>
                    Comeback For Us
                </Link>
            </main>
        </div>
    );
};
export default NotFoundPage;

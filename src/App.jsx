import { Suspense, useState } from 'react';
import StarsCanvas from './components/canvas/StarsCanvas';
import EarthCanvas from './components/canvas/EarthCanvas';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Suspense fallback={null}>
      <StarsCanvas />
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div onClick={() => setIsMenuOpen(false)}>
        <div className='min-h-[90vh] text-white container mx-auto px-2 sm:px-0 flex items-center justify-center'>
          <div className='flex flex-col xl:flex-row overflow-hidden items-center'>
            <div className='xl:flex-1 xl:h-[950px] lg:h-[650px] sm:h-[550px] h-[400px] self-stretch'>
              <EarthCanvas />
            </div>
            <div className='flex-[0.75] xl:ml-10 text-center xl:text-left sm:w-2/3 w-full xl:w-full'>
              <h1 className='text-7xl mb-6 font-bold'>MINH TRAN</h1>
              <div className='flex flex-col gap-6 font-light text-lg'>
                <p>
                  I am a graduate student of the Master of Science in Computer
                  Vision at Carnegie Mellon University, where I work on computer
                  vision and machine learning.
                </p>
                <p>
                  Prior to CMU, I've worked at Actuate AI as a Data Scientist
                  for more than 3 years. Prior to Actuate, I've earned my degree
                  in Data Science from DePaul University, where I was advised by
                  Prof.Jacob Furst, and in E-commerce from Foreign Trade
                  University of Hanoi, advised by Prof.Hung Nguyen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Introduction />
        <Projects />
        <Experience />
        <Courses />
      </div>
    </Suspense>
  );
}

export default App;

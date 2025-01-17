import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen about text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm <span className='text-4xl sm:text-7xl font-bold text-[#FF00FF]'>Muskan</span>, Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              Muskan is a good girl who is passionate about social work, 
              accessibility, and inclusion. Her homepage communicates both the 
              type of work she does and a bit of her personality through eye-catching 
              and creative design. What would you do if you had a software expert 
              available at your fingertips?
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const TimeTable = () => {
    return (
        <div name='timetable' className='w-full h-screen about text-gray-300'>
            <div className='flex flex-col pt-16 items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-16 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
                            TimeTable
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-16' >
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
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 pb-8 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm <span className='text-4xl sm:text-7xl font-bold text-[#FF00FF]'>Step 1</span>, Nice to meet you.</p>
                    </div>
                    <div>
                        <p>
                        Set Clear Goal :<span className='text-2xl sm:text-2xl font-bold text-[#FF00FF]'> NET JRF & Assistant professor</span>
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8  px-4'>
                    <div className='sm:text-right justify-between text-2xl font-bold'>
                        <p>Hi. I'm <span className='text-2xl sm:text-8xl  font-bold text-[#FF00FF]'>Step 2</span></p>
                    </div>
                    <div>
                        <p>
                        Determine Time Available : <span className='text-2xl sm:text-2xl font-bold text-[#FF00FF]'>  Available Time For Study : 10 Hr</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTable;

import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 pt-44 md:pt-0'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

        </div>
        <p className='text-xl mt-8 '>
        I am Abhishek Verma, a B.Tech student at KNIT Sultanpur. My primary focus is on software engineering and web development . I possess a wide range of skills, including proficiency in React.js, C++, HTML, CSS (Tailwind), JavaScript, SQL, MongoDB, C++, data structures, and algorithms.

        </p>
        <br />
        <p className='text-xl '> I enjoy creating visually appealing and efficient applications that provide a seamless user experience. I am constantly learning and honing my problem-solving skills to ensure that I deliver quality projects that meet my users' needs and exceed their expectations.
        </p>
      </div>
    </div>
  )
}

export default About

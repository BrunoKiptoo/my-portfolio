import React from 'react';
import image from '../Assets/image1.jpg';
import { FaGithub, FaYoutube, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
import '../index.css'

function Banner() {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
        <div className="flex-1 text-center font-secondary lg:text-left">
        <motion.h1
  variants={fadeIn('up',0.3)}
  initial='hidden'
  whileInView={'show'}
  viewport={{once: false, amount: 0.7}} 
  className="text-[36px] font-bold leading-[0.8] lg:text-[72px] font-face-arial-narrow mb-9">
    BRUNO <span>KIPTOO</span>
</motion.h1>

          <motion.div 
           variants={fadeIn('up',0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
          className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]  font-face-arial-narroww">
            <span className= 'text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Youtuber',
              2000,
              ]}
              speed={50}
              className= 'text-accent'
              wrapper='span'
              repeat={Infinity}
              />
              
          </motion.div>
          <motion.p 
           variants={fadeIn('up',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
          className="mb-8 max-w-lg mx-auto lg:mx-0 text-white">
            As a skilled full-stack developer, I specialize in Ruby on Rails and React.js. 
            With expertise in both front-end and back-end technologies, I am well-versed in building robust and dynamic web applications. 
            I strive for clean and efficient code, and I am committed to delivering high-quality solutions that meet user needs.
          </motion.p>
          <motion.div 
           variants={fadeIn('up',0.6)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
          className="flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0">
            <button className="btn btn-lg">Contact Me</button>
            <a href = "#" className= "text-gradient btn-link"></a>
          </motion.div>
          <motion.div
  variants={fadeIn('up',0.7)}
  initial='hidden'
  whileInView={'show'}
  viewport={{once: false, amount: 0.7}}  
  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
  style={{color: 'white'}}
>
  <a href= "https://www.linkedin.com/in/bruno-kiptoo-906880177/">
    <FaLinkedin/>
  </a>
  <a href= "https://github.com/BrunoKiptoo">
    <FaGithub/>
  </a>
  <a href= "https://twitter.com/zamani_bruno">
    <FaTwitter/>
  </a>
</motion.div>

        </div>
        <motion.div 
         variants={fadeIn('down',0.5)}
         initial='hidden'
         whileInView={'show'}
        //  viewport={{once: false, amount: 0.7}} 
        
        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
        <img src={image} alt="Profile" className="object-cover w-72 h-72 peach-border mx-auto lg:w-96 lg:h-96" />

        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;




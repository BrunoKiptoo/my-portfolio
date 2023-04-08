import React from 'react';
import image from '../Assets/image5.jpg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
  className="text-[36px] font-bold leading-[0.8] lg:text-[72px]  font-secondary text-white mb-6">
    BRUNO <span>KIPTOO</span>
</motion.h1>

          <motion.div 
           variants={fadeIn('up',0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
          className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ">
            <span className= 'text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Collaborator',
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
          className="mb-8 max-w-lg mx-auto lg:mx-0 text-white font-secondary text-[18px] font-semibold">
            As a skilled full-stack developer, I specialize in Ruby on Rails and React.js. 
            
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
  // style={{color: 'white'}}
  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
  
>
<a href="https://www.linkedin.com/in/bruno-kiptoo-906880177/">
    <div className="custom-icon">
      <FaLinkedin />
    </div>
  </a>
  <a href="https://github.com/BrunoKiptoo">
    <div className="custom-icon">
      <FaGithub />
    </div>
  </a>
  <a href="https://twitter.com/zamani_bruno">
    <div className="custom-icon">
      <FaTwitter />
    </div>
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




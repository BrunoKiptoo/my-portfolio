import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

import img1 from '../Assets/image11.jpg'
import img2 from '../Assets/image12.png'
import img3 from '../Assets/image15.jpg'

function Work() {
  return (
    <section className = 'section'id='work'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <motion.div 
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 text-white">
            <div>
            <h2 className="h2 leading-tight text-accent text-3xl font-bold mb-4">
              My Latest <br/>
              Work
            </h2>

              <p className="max-w-sm mb-16 text-white font-secondary font-semibold">
              I am proud to present some of my latest work, showcasing my skills and expertise. 
              With attention to detail and a commitment to excellence, I strive to create
              meaningful solutions that meet client's needs and exceed expectations.
              </p>
              <button className="btn btn-sm custom-button">View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
              className="group-hover:scale-125 transition-all duration-500" 
              src={img1} 
              alt=""/>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
                </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          {/* <div className="flex-1 flex flex-col gap-y-10"> */}
          <motion.div 
           variants={fadeIn('left', 0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className="flex-1 text-white font-secondary flex flex-col gap-y-10" >
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
              className="group-hover:scale-125 transition-all duration-500" 
              src={img2} 
              alt=""/>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
                </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-white/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
              className="group-hover:scale-125 transition-all duration-500" 
              src={img3} 
              alt=""/>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
                </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
                
              </div>
              
            </div>
            
          </motion.div>
          
        {/* </div> */}
        </div>
      </div>
      </section>
  )
}

export default Work
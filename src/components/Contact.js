import React from 'react'

import {motion} from 'framer-motion'
import { fadeIn } from '../variants'


function Contact() {
  return (
    <section className = 'py-16 lg:section' id='contact'>
      <div className= "container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide font-tertiary">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[60px] leading-none mb-12 text-white">Let's work<br/>together!</h2>
            </div>
          </motion.div>
          <motion.form 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start text-white">
            <input 
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold"
            type="text"
            placeholder="Your name"
            />
             <input 
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold"
            type="text"
            placeholder="Your email"
            />
            <textarea className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white
            focus:border-accent transition-all resize-none mb-12 font-secondary font-bold" 
            placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg custom-button font-secondary font-bold">Send message</button>
          </motion.form>
        </div>
      </div>
      </section>
  )
}

export default Contact
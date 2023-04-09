import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import aboutImage from '../Assets/image14.jpg'; // Import the image file


function About() {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }; 

  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className = 'section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
        <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
            style={{
              backgroundImage: `url(${aboutImage})`, // Set the background image using the imported image file
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              mixBlendMode: 'lighten',
              height: '640px',
            }}
          />
          <motion.div 
//           <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
           className="flex-1">
            <h2 className="text-accent font-secondary mb-2 text-[36px] font-bold">About me</h2>
            <h3 
            style={{color: 'white'}}
            className="text-accent mb-4 font-secondary text-[18px] font-semibold">
              With expertise in both front-end and back-end technologies, I am well-versed in building robust and dynamic web applications. 
           
            </h3>
            <p 
            style={{color: 'white'}}
            className="mb-6 text-primary font-secondary text-[18px] font-semibold">
               I strive for clean and efficient code, and I am committed to delivering high-quality solutions that meet user needs.
            </p>
            <div 
            style={{color: 'white'}}
            className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br/>
                Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={300} duration={3}/> : null}
                  {/* k+ */}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={40} duration={3}/> : null}
                  {/* k+ */}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br/>
                  Clients
                </div>
              </div>
            </div>
            <div 
            style={{color: 'white'}}
            className="flex gap-x-8 items-center font-secondary font-bold text-[20px]">
              <button className="btn btn-lg custom-button blink-animation" onClick={scrollToContact}>Contact me</button>
              <a href="https://github.com/BrunoKiptoo" className="text-gradient font-primary btn-link font-secondary font-bold text-[20px]">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


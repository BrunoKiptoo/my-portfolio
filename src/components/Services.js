import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import aboutImage from '../Assets/image9.jpg'; // Import the image file
const services =[
  {
    name: 'UI/UX Design',
    description:
    'Creating visually appealing and user-friendly interfaces that enhance user experience and engagement on websites or applications.',
    link: 'Learn more',
  },
  {
    name: 'Web Design',
    description:
    'Crafting visually appealing and functional websites that are aesthetically pleasing, easy to navigate, and optimized for a seamless user experience.',
    link: 'Learn more',
  },
  {
    name: 'Front-end Development',
    description:
    'Building the client-facing part of applications using modern front-end technologies such as React.js to create engaging user interfaces.',
    link: 'Learn more',
  },
  {
    name: 'Back-end Development',
    description:
    'Developing the server-side functionality of websites or applications using technologies like databases, APIs, and server-side programming languages to ensure smooth data management and processing',
    link: 'Learn more',
  },
  // {
  //   name: 'Responsive Design',
  //   description:
  //   'hvshsdvdshhsdvhsvdhvsdhvsdhvsdhvshvdvsvdvsdhsd',
  //   link: 'Learn more',
  // }
]

function Services() {

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  }; 

  return (
    <section className='section' id='services'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          style={{
            backgroundImage: `url(${aboutImage})`, // Set the background image using the imported image file
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            mixBlendMode: 'lighten',
            height: '640px',
          }}
        >
          <h2 className="text-accent text-xl lg:text-3xl mb-4 lg:mb-6">What I Do</h2>
          <h3 className="h3 text-lg lg:text-2xl max-w-[455px] mb-8 lg:mb-16 font-secondary" style={{color: 'white'}}>
          Freelance Full Stack Developer with expertise in web development, creating innovative solutions, and delivering high-quality code.
          </h3>
          <button className="btn btn-sm text-base custom-button font-secondary lg:text-lg font-semibold blink-animation" onClick={scrollToWork} style={{color: '#000'}}>
            See my work
          </button>
        </motion.div>
  
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className="flex-1"
          style={{color: 'white'}}
        >
          <div>
            {services.map((service, index) => {
  
              const {name, description, link} = service;
              return (
                <div className="border-b border-white/20 h-[120px] mb-[24px] flex" key={index}>
                  <div className= "max-w-[476px]">
                    <h4 className="text-lg lg:text-xl tracking-wider font-primary font-semibold mb-2 lg:mb-4">{name}</h4>
                    <p className="font-secondary leading-tight text-sm lg:text-base">{description}</p>
                  </div>
                  <div class="flex flex-col flex-1 items-end">
  <a href="#" class="btn w-9 h-9 mb-2 lg:mb-[42px] flex justify-center items-center">
    <BsArrowUpRight class="arrow-icon" />
  </a>
  <a href="#" class="text-gradient text-xs lg:text-sm text-accent">
    {link}
  </a>
</div>

                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  
  )
}

export default Services
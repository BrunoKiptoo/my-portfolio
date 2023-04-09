// import React from 'react'

// import {motion} from 'framer-motion'
// import { fadeIn } from '../variants'
// import emailjs from 'emailjs-com';



// function Contact() {

//   const sendEmail = (event) => {
//     event.preventDefault(); // Prevents form submission
//     const templateParams = {
//       to_name: 'Recipient Name',
//       from_name: event.target.name.value,
//       from_email: event.target.email.value,
//       message: event.target.message.value,
//     };
    
//     emailjs.send('service_qc2lugo', 'template_sd4tld9', templateParams, 'vIZosvxHBrDlxjMHG')
//       .then((response) => {
//         console.log('Email sent successfully!', response.status, response.text);
//         // You can add additional logic here, such as showing a success message or resetting the form
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//         // You can add additional error handling logic here
//       });
//   };
  
//   return (
//     <section className = 'py-16 lg:section' id='contact'>
//       <div className= "container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           <motion.div 
//           variants={fadeIn('left', 0.5)}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{once: false, amount: 0.3}}
//           className="flex-1 flex justify-start items-center">
//             <div>
//               <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide font-tertiary">Get in touch</h4>
//               <h2 className="text-[45px] lg:text-[60px] leading-none mb-12 text-white">Let's work<br/>together!</h2>
//             </div>
//           </motion.div>
//           <motion.form onSubmit={sendEmail}
//           variants={fadeIn('left', 0.5)}
//           initial='hidden'
//           whileInView={'show'}
//           viewport={{once: false, amount: 0.3}}
//           className="flex-1 border rounded-2xl flex flex-col gap-y-6
//           pb-24 p-6 items-start text-white">
//             <input 
//             className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
//             focus:border-accent transition-all font-secondary font-bold"
//             type="text"
//             placeholder="Your name"
//             />
//              <input 
//             className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
//             focus:border-accent transition-all font-secondary font-bold"
//             type="text"
//             placeholder="Your email"
//             />
//             <textarea className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white
//             focus:border-accent transition-all resize-none mb-12 font-secondary font-bold" 
//             placeholder="Your message"
//             ></textarea>
//             <button className="btn btn-lg custom-button font-secondary font-bold">Send message</button>
//           </motion.form>
//         </div>
//       </div>
//       </section>
//   )
// }

// export default Contact


import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault(); // Prevents form submission
    const templateParams = {
      to_name: 'Recipient Name',
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      message: event.target.message.value,
    };

    emailjs
      .send(
        'service_qc2lugo',
        'template_sd4tld9',
        templateParams,
        'vIZosvxHBrDlxjMHG' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // You can add additional logic here, such as showing a success message or resetting the form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // You can add additional error handling logic here
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide font-tertiary'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[60px] leading-none mb-12 text-white'>
                Let's work
                <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start text-white'
          >
            <input
              name='name'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold'
              type='text'
              placeholder='Your name'
            />
            <input
              name='email'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold'
              type='text'
              placeholder='Your email'
            />
            <textarea
              name='message'
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
            focus:border-accent transition-all resize-none mb-12 font-secondary font-bold'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg custom-button font-secondary font-bold' type='submit'>
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

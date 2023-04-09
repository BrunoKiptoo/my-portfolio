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


// import React from 'react';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
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

//     emailjs
//       .send(
//         'service_qc2lugo',
//         'template_sd4tld9',
//         templateParams,
//         'vIZosvxHBrDlxjMHG' // Replace with your EmailJS user ID
//       )
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
//     <section className='py-16 lg:section' id='contact'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col lg:flex-row'>
//           <motion.div
//             variants={fadeIn('left', 0.5)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}
//             className='flex-1 flex justify-start items-center'
//           >
//             <div>
//               <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide font-tertiary'>
//                 Get in touch
//               </h4>
//               <h2 className='text-[45px] lg:text-[60px] leading-none mb-12 text-white'>
//                 Let's work
//                 <br />
//                 together!
//               </h2>
//             </div>
//           </motion.div>
//           <motion.form
//             onSubmit={sendEmail}
//             variants={fadeIn('left', 0.5)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.3 }}
//             className='flex-1 border rounded-2xl flex flex-col gap-y-6
//           pb-24 p-6 items-start text-white'
//           >
//             <input
//               name='name'
//               className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
//             focus:border-accent transition-all font-secondary font-bold'
//               type='text'
//               placeholder='Your name'
//             />
//             <input
//               name='email'
//               className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
//             focus:border-accent transition-all font-secondary font-bold'
//               type='text'
//               placeholder='Your email'
//             />
//             <textarea
//               name='message'
//               className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
//             focus:border-accent transition-all resize-none mb-12 font-secondary font-bold'
//               placeholder='Your message'
//             ></textarea>
//             <button className='btn btn-lg custom-button font-secondary font-bold' type='submit'>
//               Send message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault(); // Prevents form submission
    setSending(true); // Set sending state to true

    const templateParams = {
      to_name: 'Recipient Name',
      from_name: event.target.name.value,
      from_email: event.target.email.value,
      message: event.target.message.value,
    };

    emailjs
      .send(
        'service_qc2lugo', // Replace with your EmailJS service ID
        'template_sd4tld9', // Replace with your EmailJS template ID
        templateParams,
        'vIZosvxHBrDlxjMHG' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSending(false); // Set sending state to false
        setSent(true); // Set sent state to true
        // You can add additional logic here, such as showing a success message or resetting the form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSending(false); // Set sending state to false
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
                Let's work<br />together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start text-white'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold'
              type='text'
              name='name' // Added name attribute for form data
              placeholder='Your name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold'
              type='text'
              name='email' // Added name attribute for form data
              placeholder='Your email'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
            focus:border-accent transition-all font-secondary font-bold'
            name='message' // Added name attribute for form data
            placeholder='Your message'
            />
            <button
                       className='btn btn-lg custom-button font-secondary font-bold relative'
                       type='submit'
                     >
            {sending ? (
            <div className='flex items-center'>
            <span className='mr-2'>Sending...</span>
            <svg
                             className='animate-spin h-5 w-5 text-white'
                             xmlns='http://www.w3.org/2000/svg'
                             fill='none'
                             viewBox='0 0 24 24'
                           >
            <circle
                               className='opacity-25'
                               cx='12'
                               cy='12'
                               r='10'
                               stroke='currentColor'
                               strokeWidth='4'
                             ></circle>
            <path
                               className='opacity-75'
                               fill='currentColor'
                               d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.3a9.956 9.956 0 01-2-2L16.697 4.14A7.963 7.963 0 0020 12h-4a3.963 3.963 0 01-3 1.131z'
                             ></path>
            </svg>
            </div>
            ) : (
            sent ? (
            <div>
            <span>Sent!</span>
            <svg
                               className='h-5 w-5 ml-2'
                               xmlns='http://www.w3.org/2000/svg'
                               fill='none'
                               viewBox='0 0 24 24'
                             >
            <path
                                 stroke='currentColor'
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M5 13l4 4L19 7'
                               ></path>
            </svg>
            </div>
            ) : (
            'Send'
            ))
            }
            </button>
            </motion.form>
            </div>
            </div>
            </section>
            );
            }
            
            export default Contact;

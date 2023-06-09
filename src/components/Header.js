// import React from 'react';
// import logo from '../Assets/logo.png';

// function Header() {
//   return (
//     <header className="py-8">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <a href="#">
//             <img src={logo} alt="" style={{ width: '300px', height: 'auto' }} />
//           </a>
//           <button class="btn btn-sm btn-custom font-secondary font-bold blink-animation">Work With Me</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import logo from '../Assets/logo.png';

function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="" style={{ width: '300px', height: 'auto' }} />
          </a>
          <button className="btn btn-sm text-white font-secondary font-semibold blink-animation" onClick={scrollToContact}>
            Work With Me
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;


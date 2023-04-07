import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav>
      <div className="container mx-auto">
        <div>
          <Link>
            <BiHomeAlt />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

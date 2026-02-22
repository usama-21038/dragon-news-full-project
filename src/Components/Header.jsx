import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div>
           <div className='flex justify-center flex-col gap-3 text-center items-center mx-auto'>
            <img className='w-[400px] my-3' src={logo} alt="" />
           <p className='text-accent '>Journalism Without Fear or Favour</p>
           {/* Show date */}
           <p className='text-semibold text-accent'>{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
            </div> 
        </div>
    );
};

export default Header;
import React from 'react';
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div>
           <div className='flex justify-center flex-col gap-3 text-center items-center mx-auto'>
            <img className='w-[350px] my-3' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
            </div> 
        </div>
    );
};

export default Header;
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with </h2>

            <div className='space-y-5'>
                <button className='btn btn-outline w-full btn-secondary'><FcGoogle  size={24}/> Login with google</button>
                <button className='btn btn-outline w-full btn-primary'><FaGithub  size={24}/> Login with github</button>
            </div>

        </div>
    );
};

export default SocialLogin;
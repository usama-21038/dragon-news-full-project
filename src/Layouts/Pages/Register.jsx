import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
       <div className="min-h-screen flex items-center justify-center">
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-center mt-5 text-2xl font-bold">Register your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Name  */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          {/* Photo URL  */}
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='pt-5 font-semibold text-center'>Already Have An Account? <NavLink className="text-secondary" to="/auth/login">login</NavLink></p>
        </fieldset>
      </div>
    </div>
  </div>
    );
};

export default Register;
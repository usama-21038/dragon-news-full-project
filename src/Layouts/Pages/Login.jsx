import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="text-center mt-5 text-2xl font-bold">Login your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='pt-5 font-semibold text-center'>Dont't Have An Account? <NavLink className="text-secondary" to="/auth/register">Register</NavLink></p>
        </fieldset>
      </div>
    </div>
  </div>

    );
};

export default Login;
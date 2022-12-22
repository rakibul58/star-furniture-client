import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="card w-96 bg-base-300 shadow-xl login mx-auto pt-6 my-20">
        <label className='mx-auto text-2xl'>Login</label>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              Email
            </label>
            <input type="text" placeholder="enter email" className="input w-full max-w-xs mb-8" />
            <label className="label">
              Password
            </label>
            <input type="Password" placeholder="enter password" className="input w-full max-w-xs mb-8" />
            <input className='btn btn-primary mb-8' type="submit" value="Login" />
          </div>
          <p>Don't have an account? Please <Link className='link link-secondary' to='/register'>Register</Link></p>
        </div>
      </div>
    </>
  );
};

export default Login;
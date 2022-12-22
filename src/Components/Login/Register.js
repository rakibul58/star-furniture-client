import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <form className="card w-96 bg-base-300 shadow-xl mx-auto my-20 py-6">
        <label className='mx-auto text-2xl'>Register</label>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
            </label>
            <input type="text" placeholder="Email" className="input w-full mb-8" />
            <input type="Password" placeholder="Password" className="input w-full mb-8" />
            <input type="Password" placeholder="confirm Password" className="input w-full mb-8" />
            <input type="submit" value='Register' className='btn btn-primary mb-8' />
          </div>
          <p>Already have an account? Please <Link className='link link-secondary' to='/login'>Login</Link></p>
          <div className='divider'>Or</div>
          <button className='btn bg-blue-500 text-white'>Login With Google</button>
        </div>
      </form>
    </>
  );
};

export default Register;
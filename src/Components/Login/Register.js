import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import img from '../../images/login.jpg';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Password Doesn't match");
      return;
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Registered Successfully");
        navigate('/');
      })
      .catch(error => console.error(error));


  }

  return (
    <div className='px-10'>
      <div className='my-32 flex flex-wrap justify-center gap-10'>
        <div className='lg:w-1/2 w-full'>
          <img src={img} alt="" />
        </div>
        <div>
          <form onSubmit={handleEmailRegister} className="card bg-base-300 shadow-xl mx-auto my-20 py-6">
            <label className='mx-auto text-2xl'>Register</label>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                </label>
                <input type="text" name='email' placeholder="Email" className="input w-full mb-8" />
                <input type="Password" name='password' placeholder="Password" className="input w-full mb-8" />
                <input type="Password" name='confirmPassword' placeholder="confirm Password" className="input w-full mb-8" />
                <input type="submit" value='Register' className='btn btn-primary mb-8' />
              </div>
              <p>Already have an account? Please <Link className='link link-secondary' to='/login'>Login</Link></p>
              <div className='divider'>Or</div>
              <button className='btn bg-blue-500 text-white'>Login With Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
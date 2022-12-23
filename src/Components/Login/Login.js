import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import img from '../../images/login.jpg';

const Login = () => {

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(result => {
        navigate(from, { replace: true });
        form.reset();
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
          <form onSubmit={handleLogin} className="card bg-base-300 shadow-xl login mx-auto pt-6 my-20">
            <label className='mx-auto text-2xl font-bold text-secondary'>Login</label>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  Email
                </label>
                <input type="text" name='email' placeholder="enter email" className="input w-full max-w-xs mb-8" />
                <label className="label">
                  Password
                </label>
                <input type="Password" name='password' placeholder="enter password" className="input w-full max-w-xs mb-8" />
                <input className='btn btn-primary mb-8' type="submit" value="Login" />
              </div>
              <p>Don't have an account? Please <Link className='link link-secondary' to='/register'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
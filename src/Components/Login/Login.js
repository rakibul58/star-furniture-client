import React from 'react';

const Login = () => {
    return (
      <body className='bg-slate-400'>
        <div className="card w-96 bg-base-100 shadow-xl login mx-auto">
          <label className='mx-auto text-2xl'>Login</label>
               <div className="card-body">
               <div className="form-control">
                <label className="label">
                  Email
                </label>
                   <input type="text" placeholder="Email" className="input w-full max-w-xs mb-8" />
                <label className="label">
                 Password
                </label>
                  <input type="Password" placeholder="Password" className="input w-full max-w-xs mb-8" /> 
                </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Login</button>
                 </div>
                 <a className='mx-auto' href='/register'>Create an account</a>
               </div>
        </div> 
     </body>
    );
};

export default Login;
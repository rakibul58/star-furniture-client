import React from 'react';

const Register = () => {
    return (
        <body className='my-20'>
        <div className="card w-96 bg-base-200 shadow-xl login mx-auto">
          <label className='mx-auto mt-20 text-2xl'>Register</label>
               <div className="card-body">
               <div className="form-control">
                <label className="label">
                </label>
                   <input type="text" placeholder="Name" className="input w-full max-w-xs mb-8" />
                   <input type="text" placeholder="Email" className="input w-full max-w-xs mb-8" />
                   <input type="Password" placeholder="Password" className="input w-full max-w-xs mb-8" />
                   <input type="Password" placeholder="confirm Password" className="input w-full max-w-xs mb-8" />
                </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Register</button>
                 </div>
               </div>
        </div> 
     </body>
    );
};

export default Register;
import React from 'react';

const AddServices = () => {
    return (
        <div className='my-20'>
        <form >
        <div className="card w-96 bg-base-200 shadow-xl login mx-auto">
          <label className='mx-auto mt-20 text-2xl'>AddServices</label>
               <div className="card-body">
               <div className="form-control">
                <label className="label">
                  Title
                </label>
                   <input type="text" placeholder="Title" className="input w-full max-w-xs mb-8" />
                <label className="label">
                 discription
                </label>
                   <textarea className="textarea" placeholder="discription"></textarea>
                </div>
                  <div className="card-actions justify-end">
                  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                 </div>
                 <button className="btn btn-primary">Add</button>
               </div>
        </div> 
     </form>
        </div>
    );
};

export default AddServices;
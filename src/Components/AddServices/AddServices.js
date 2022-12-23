import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();


  const handleSubmitPhone = data => {


    console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const image = imgData.data.url;
          const service = {
            title: data.title,
            image,
            description: data.description,
            price: data.price
          }
          fetch('https://star-furniture-server.vercel.app/services', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(service)
          })
            .then(res => res.json())
            .then(data => {
              toast.success("Service added Successfully");
              navigate('/services');
              reset();
            })
        }
      });

  }
  return (
    <div className='my-20 px-10'>
      <form onSubmit={handleSubmit(handleSubmitPhone)}>
        <div className="card bg-base-300 w-full lg:w-1/4 pt-8 shadow-2xl login mx-auto">
          <label className='mx-auto text-2xl font-bold text-secondary'>Add a Service</label>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                Title
              </label>
              <input {...register("title", { required: "Title is required" })} name='title' type="text" placeholder="add a title" className="input input-bordered w-full mb-8" />
              <label className="label">
                Price
              </label>
              <input {...register("price", { required: "Price is required" })} name='price' type="text" placeholder="add a price" className="input input-bordered w-full mb-8" />
              <label className="label">
                Image
              </label>
              <input {...register("image", { required: "Image is required" })} type="file" className="file-input file-input-primary file-input-bordered w-full mb-8" />
              <label className="label">
                Description
              </label>
              <textarea {...register("description", { required: "Description is required" })} className="textarea textarea-bordered" placeholder="Add Description"></textarea>
              <input type="submit" className='btn btn-primary mt-5' value="add Services" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
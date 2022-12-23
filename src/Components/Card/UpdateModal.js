import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateModal = () => {

    const modalService = useLoaderData();
    const navigate = useNavigate();

    console.log(modalService);

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            image,
            price,
            description
        }


        fetch(`http://localhost:5000/services/${modalService._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`Post Updated Successfully`);
                navigate('/services');
            });
    }

    return (
        <div className='w-full px-10 mt-12 mb-44'>
            <div className="card lg:w-1/3 w-full mx-auto">
                <form onSubmit={handleUpdate} className="modal-box">
                    <h4 className='text-2xl font-bold font-serif text-primary text-center mb-6'>Update Post</h4>
                    <label className='label label-text font-semibold'>Title</label>
                    <input type="text" className='input input-bordered w-full mb-6' defaultValue={modalService.title} name="title" id="" />
                    <label className='label label-text font-semibold'>Image URL</label>
                    <input type="text" className='input input-bordered w-full mb-6' defaultValue={modalService.image} name="image" id="" />
                    <label className='label label-text font-semibold'>Price</label>
                    <input type="text" className='input input-bordered w-full mb-6' defaultValue={modalService.price} name="price" id="" />
                    <label className='label label-text font-semibold'>Description</label>
                    <textarea type="text" className='textarea textarea-bordered w-full mb-6' defaultValue={modalService.description} name="description" id="" />
                    <div className="modal-action">
                        <input htmlFor='my-modal' type="submit" value='Update' className="btn btn-sm btn-primary" id="" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;
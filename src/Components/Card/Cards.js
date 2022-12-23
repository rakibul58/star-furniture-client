import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Cards.css';

function Cards({ services, service, setService }) {
  const { user } = useContext(AuthContext);

  const handleDelete = id => {
    console.log(id);
    fetch(`https://star-furniture-server.vercel.app/services/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        const newServices = services.filter(ser => ser._id !== id);
        setService(newServices);
        toast.success('Post Deleted Successfully');
      });
  }


  return (
    <div>
      <div className="card bg-base-300 shadow-2xl">
        <div className="card-body">
          <figure><img className='Card-design rounded-lg' src={service.image} alt="Shoes" /></figure>
          <h2 className="card-title text-3xl text-primary mt-3">{service.title}</h2>
          <h4 className="card-title">Price: <span className='font-bold text-yellow-500'>${service.price}</span></h4>
          <p>{service.description.length > 50 ? service.description.slice(0, 50) + '...' : service.description}</p>
          {
            user &&
            <div className="card-actions justify-end">
              <button onClick={() => handleDelete(service._id)} className="btn btn-xs btn-error text-white hover:bg-opacity-70">Delete</button>
              <Link to={`/updatemodal/${service._id}`} className="btn btn-xs btn-info text-white hover:bg-opacity-70">Update</Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;

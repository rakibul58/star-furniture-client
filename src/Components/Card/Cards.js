import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Cards.css';

function Cards({ service }) {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className=" place-self-auto card bg-base-300 shadow-2xl">
        <div className="card-body">
          <figure><img className='Card-design rounded-lg' src={service.image} alt="Shoes" /></figure>
          <h2 className="card-title text-3xl text-primary mt-3">{service.title}</h2>
          <h4 className="card-title">Price: <span className='font-bold text-yellow-500'>${service.price}</span></h4>
          <p>{service.description}</p>
          {
            user &&
            <div className="card-actions justify-end mt-5">
              <button className="btn btn-xs btn-error text-white hover:bg-opacity-70">Delete</button>
              <button className="btn btn-xs btn-info text-white hover:bg-opacity-70">Update</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;

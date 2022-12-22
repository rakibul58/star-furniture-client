import React from 'react';
import './Cards.css';

function Cards({service}) {
  return (
    <div>
      <div className=" place-self-auto card bg-base-300 shadow-2xl">
        <div className="card-body">
          <figure><img className='Card-design rounded-lg' src={service.image} alt="Shoes" /></figure>
          <h2 className="card-title text-3xl text-primary mt-3">{service.title}</h2>
          <h4 className="card-title">Price: <span className='font-bold text-yellow-500'>${service.price}</span></h4>
          <p>{service.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show details</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

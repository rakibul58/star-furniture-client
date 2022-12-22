import React from 'react';
import './Cards.css';

function Cards({title,imageUrl,body}) {
    return (
        <div>
            <div className=" place-self-auto card bg-base-100 shadow-xl">
                     <div className="card-body">
                     <figure><img className='Card-design' src={imageUrl} alt="Shoes" /></figure>
                       <h2 className="card-title">{title}</h2>
                         <p>{body}</p>
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

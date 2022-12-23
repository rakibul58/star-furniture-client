import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';

const Services = () => {
  const [services, setService] = useState([]);
  const [modalService , setModalService] = useState([]);

  useEffect(() => {
    fetch('https://star-furniture-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  return (
    <div className='px-10 mt-12'>
      <div className='text-center mb-12'>
        <h4 className='text-2xl font-extrabold font-serif text-primary'>Furniture</h4>
        <h1 className='text-black text-5xl mb-6'>These are some of our best furniture</h1>
        <p className='text-base-content'>Star furniture is one of the first furniture brands in Bangladesh to expand globally. Today, this multinational company is proudly representing Bangladeshi furniture in countries like Canada, Australia, USA, Kuwait, UAE, Saudi Arabia, Russia, Egypt, Thailand, India, Nepal, and Bhutan.
          Built upon the trust of millions of customers, Star furniture has provided premium quality furniture since 1989. Manufactured with the best quality timber, the modern and stylish designed furniture are a signature of elegance and comfort.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32'>
        {
          services.map(service => <Cards
            key={service._id}
            service={service}
            setService={setService}
            services={services}
            modalService={modalService}
            setModalService={setModalService}
          ></Cards>)
        }
      </div>
    </div>
  );
};

export default Services;
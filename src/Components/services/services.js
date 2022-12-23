import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setService(data));
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
      {
        services.map(service => <Cards
        key={service._id}
        service={service}
        ></Cards>)
      }
    </div>
  );
};

export default Services;
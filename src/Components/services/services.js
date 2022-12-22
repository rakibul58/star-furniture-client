import React from 'react';
import Cards from '../Card/Cards';

const Services = () => {
  return (
    <div>
      <div className='p-10 grid grid-cols-3 gap-5'>
        <Cards title='sofa' imageUrl='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' body='frfgfgsdfg' />
        <Cards title='say some th' imageUrl='https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' body='frfgfgsdfg' />
        <Cards title='say some th' imageUrl='https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-05/csc-234ee.jpg' body='frfgfgsdfg' />
        <Cards title='say some th' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15IQX_yhWtHV7601nInB7cuDBkKHmXaEVjjL-19s-8AN3Pz74eXYfpiReG7bwGZi_HkE&usqp=CAU' body='frfgfgsdfg' />
        <Cards title='say some th' imageUrl='https://static-01.daraz.com.bd/p/4b32998953738833003c6be531625da5.jpg' body='frfgfgsdfg' />
        <Cards title='say some th' imageUrl='https://static01.nyt.com/images/2017/09/11/smarter-living/dining-tables-slide-0XQB/dining-tables-slide-0XQB-jumbo.jpg' body='frfgfgsdfg' />

      </div>
      <div className='w-full'>
        <button className="mx-auto btn btn-primary">Show more</button>
      </div>
    </div>

  );
};

export default Services;
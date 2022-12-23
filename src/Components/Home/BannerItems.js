import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image , id , next , prev} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img w-full h-[900px]'>
                <img src={image} alt='' className="w-full rounded-xl h-[900px]" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3 pr-10">
                <h1 className='text-white font-bold text-3xl lg:text-5xl'>Affordable<br />
                    Price for furnitures<br />
                    & luxury callections</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white font-semibold text-lg lg:block hidden'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute lg:flex flex-wrap justify-end transform -translate-y-1/2 left-24 top-2/3 hidden">
                <Link to='/services'><button className="btn btn-error hover:bg-transparent mr-2 px-6">Services</button></Link>
                <Link to='/login'><button className="btn btn-outline btn-error px-8">Login</button></Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-black bg-opacity-60">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;
import React from 'react';

import BannerItems from './BannerItems';

const Banner = () => {
    const bannerData = [
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/XJ/NO/BT/68434442/bedroom-furniture-500x500.jpg",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/XJ/NO/BT/68434442/bedroom-furniture-500x500.jpg",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/XJ/NO/BT/68434442/bedroom-furniture-500x500.jpg",
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/XJ/NO/BT/68434442/bedroom-furniture-500x500.jpg",
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/XJ/NO/BT/68434442/bedroom-furniture-500x500.jpg",
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/XJ/NO/BT/68434442/bedroom-furniture-500x500.jpg",
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItems
                key={slide.id} 
                slide={slide}
                >

                </BannerItems>)
            }
        </div>
    );
};

export default Banner;
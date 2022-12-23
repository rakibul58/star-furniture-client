import React from 'react';

import BannerItems from './BannerItems';

const Banner = () => {
    const bannerData = [
        {
            image: "https://img.freepik.com/free-psd/picture-frame-mockup-psd-hanging-modern-living-room-home-decor-interior_53876-114536.jpg?w=2000",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: "https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?w=740&t=st=1671693661~exp=1671694261~hmac=b36af7c0da2891570cf66d1a45538c0c6a37ce51de532927496690afd3055e4a",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?w=740&t=st=1671693811~exp=1671694411~hmac=c9d48636cfb899130bba9cd5557da76f602292eb6336db0550cee8104b3b674e",
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: "https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178887.jpg?w=740&t=st=1671693997~exp=1671694597~hmac=580385744e4fd611f37b0b115888ebb120605eb43fbf5fe3c600883bc71d2931",
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: "https://img.freepik.com/free-photo/chair-modern-table-interior-indoor_1122-2074.jpg?w=740&t=st=1671693902~exp=1671694502~hmac=76ca3b8ae0185112e3ac914a6673bc4feeea424ce6651379f01f10fd3690972a",
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=740&t=st=1671694052~exp=1671694652~hmac=587aaef6848093005045fed9ffca5e4bbace570d4fb05eb839d21b6365b93d62",
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full py-10 mb-44">
            {
                bannerData.map(slide => <BannerItems key={slide.id} slide={slide}>
                </BannerItems>)
            }
        </div>
    );
};

export default Banner;
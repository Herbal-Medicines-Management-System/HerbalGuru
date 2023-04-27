import React from 'react';
import "./CustomersViwed.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';

const CustomersViwed = ({ type }) => {

    const data = [
        {
            id: 21,
            img: "/img/cv1.webp",
            img2: "/img/cv1_back.webp",
            title: "California Gold Nutrition, SUPERFOODS - Cold Pressed Organic Virgin Coconut Oil, 16 fl oz (473 ml)",
            price: 2500,
        },
        {
            id: 22,
            img: "/img/cv2.webp",
            img2: "/img/cv2_back.webp",
            title: "Mild By Nature, Thickening B-Complex + Biotin Shampoo, No Sulfates, Citrus Squeeze, 16 fl oz (473 ml)",
            price: 1800,
        },
        {
            id: 23,
            img: "/img/cv3.webp",
            img2: "/img/cv3_back.webp",
            title: "Mild By Nature, On The Go Hand Cleanser, Alcohol-Free, Lemongrass, 2 fl oz (60 ml)",
            price: 1200,
        },
        {
            id: 24,
            img: "/img/cv4.webp",
            img2: "/img/cv4_back.webp",
            title: "California Gold Nutrition, Omega-3 Premium Fish Oil, 180 EPA / 120 DHA, 100 Fish Gelatin Softgels",
            price: 4000,
        },
        {
            id: 25,
            img: "/img/cv5.webp",
            img2: "/img/cv5_back.webp",
            title: "Cococare, 100% Lavender, 1 fl oz (30 ml)",
            price: 1500,
        },
    ]

    return (
        <div className='customersViwed'>
            <div className='top'>
                <h1>{type} also viewed</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className='bottom'>
                {data.map(item => (
                    <CardWithoutOldPrice item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default CustomersViwed;
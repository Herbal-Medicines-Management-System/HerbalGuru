import React from 'react';
import "./NewArrivals.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';

const NewArrivals = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "/img/item11.webp",
            img2: "/img/item11_back.jpg",
            title: "Sunwarrior, Shape, Core Cleanser, Strawberry Cooler, 9.5 oz (270 g)",
            price: 2500,
        },
        {
            id: 2,
            img: "/img/item12.webp",
            img2: "/img/item12_back.webp",
            title: "PlantFusion, Inspire for Women, Natural, 13.56 oz (384.3 g)",
            price: 1800,
        },
        {
            id: 3,
            img: "/img/item13.webp",
            img2: "/img/item13_back.jpg",
            title: "Aunt Jackie's, Soft All Over, Multi-Purpose Oil Therapy, (237 ml)",
            price: 1200,
        },
        {
            id: 4,
            img: "/img/item14.webp",
            img2: "/img/item14_back.jpg",
            title: "Swanson, Albion Copper, 2 mg, 60 Capsules",
            price: 4000,
        },
        {
            id: 5,
            img: "/img/item15.webp",
            img2: "/img/item15_back.webp",
            title: "Aunt Jackie's, Don't Shrink, Flaxseed Elongating Curling Gel, 3 oz (85 g)",
            price: 1500,
        },

    ]

    return (
        <div className='newArrivals'>
            <div className='top'>
                <h1>{type} arrivals</h1>
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

export default NewArrivals;
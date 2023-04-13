import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "/img/item1.webp",
            img2: "/img/item1_back.webp",
            title: "Natural Factors, WellBetX, Berberine, 500 mg, 120 Vegetarian Capsules",
            isNew: true,
            oldPrice: 3000,
            price: 2500,
        },
        {
            id: 2,
            img: "/img/item2.webp",
            img2: "/img/item2_back.webp",
            title: "Life-flo, Liquid Iodine Plus, Unflavored, 2 fl oz (59 ml)",
            isNew: true,
            oldPrice: 2200,
            price: 1800,
        },
        {
            id: 3,
            img: "/img/item3.webp",
            img2: "/img/item3_back.webp",
            title: "YumEarth, Organic Pops, Favorites, 50 Pops, 10.9 oz (310 g)",
            isNew: true,
            oldPrice: 2000,
            price: 1200,
        },
        {
            id: 4,
            img: "/img/item4.jpg",
            img2: "/img/item4_back.webp",
            title: "NutriBiotic, Immunity, Sodium Ascorbate, Crystalline Powder, (227 g)",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 5,
            img: "/img/item5.webp",
            img2: "/img/item5_back.jpg",
            title: "California Gold Nutrition, Baby Vitamin D3 Liquid, 10 mcg (400 IU)",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className='bottom'>
                {data.map(item=>(
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
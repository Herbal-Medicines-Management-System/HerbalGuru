import React from 'react';
import "./List.scss";
import Card from '../Card/Card';

const List = () => {

    const data = [
        {
            id: 1,
            img: "/img/b1.webp",
            title: "NOW Foods, Essential Oils, Lavender, 1 fl oz (30 ml)",
            price: 2500,
        },
        {
            id: 2,
            img: "/img/b2.webp",
            title: "Cococare, 100% Lavender, 1 fl oz (30 ml)",
            price: 1800,
        },
        {
            id: 3,
            img: "/img/b3.webp",
            title: "NOW Foods, Solutions, Jasmine, 1 fl oz (30 ml)",
            price: 1200,
        },
        {
            id: 4,
            img: "/img/b4.webp",
            title: "NOW Foods, Essential Oils, Peppermint, 1 fl oz (30 ml)",
            price: 4000,
        },
        {
            id: 5,
            img: "/img/b5.webp",
            title: "NOW Foods, Essential Oils, Cedarwood, 1 fl oz (30 ml)",
            price: 1500,
        },
        {
            id: 6,
            img: "/img/b6.webp",
            title: "NOW Foods, Essential Oils, Rose Absolute, 1 fl oz (30 ml)",
            price: 1500,
        },
        {
            id: 7,
            img: "/img/b7.webp",
            title: "artnaturals, Patchouli Oil, 0.50 fl oz (15 ml)",
            price: 1500,
        },
        {
            id: 8,
            img: "/img/b8.webp",
            title: "NOW Foods, Essential Oils, Clove, 1 fl oz (30 ml)",
            price: 1500,
        },
        {
            id: 9,
            img: "/img/b9.webp",
            title: "Aura Cacia, Pure Essential Oil, Texas Cedarwood, 0.5 fl oz (15 ml)",
            price: 1500,
        },
        {
            id: 10,
            img: "/img/b10.webp",
            title: "Aura Cacia, Aromatherapy Mist, Relaxing Lavender, 4 fl oz (118 ml)",
            price: 1500,
        },
        {
            id: 11,
            img: "/img/b11.webp",
            title: "NOW Foods, Essential Oils, Geranium, 1 fl oz (30 ml)",
            price: 1500,
        },
        {
            id: 12,
            img: "/img/b12.webp",
            title: "NOW Foods, Solutions, Sweet Almond Oil, 16 fl oz (473 ml)",
            price: 1500,
        },
        {
            id: 13,
            img: "/img/b13.webp",
            title: "Cococare, 100% Natural Peppermint Oil, 1 fl oz (30 ml)",
            price: 1500,
        },
        {
            id: 14,
            img: "/img/b14.webp",
            title: "NOW Foods, Essential Oils, Lemon Eucalyptus, 1 fl oz (30 ml)",
            price: 1500,
        },
        {
            id: 15,
            img: "/img/b15.webp",
            title: "NOW Foods, Essential Oils, Peppermint, 2 fl oz (59 ml)",
            price: 1500,
        },
        {
            id: 16,
            img: "/img/b16.webp",
            title: "NOW Foods, Solutions, Certified Organic Jojoba Oil, 4 fl oz (118 ml)",
            price: 1500,
        },
        {
            id: 17,
            img: "/img/b17.webp",
            title: "Heritage Store, Rosewater, Refreshing Facial Spray, 8 fl oz (237 ml)",
            price: 1500,
        },
        {
            id: 18,
            img: "/img/b18.webp",
            title: "NOW Foods, Essential Oils, Peppermint, 4 fl oz (118 ml)",
            price: 1500,
        },
        {
            id: 19,
            img: "/img/b19.webp",
            title: "NOW Foods, Solutions, Apricot Oil, 4 fl oz (118 ml)",
            price: 1500,
        },
        {
            id: 20,
            img: "/img/b20.webp",
            title: "ZUM, Zum Mist, Aromatherapy Room & Body Mist, Frankincense & Myrrh, (118 ml)",
            price: 1500,
        },

    ]

    return (
        <div className='list'>{data.map(item => (
            <Card item={item} key={item.id} />
        ))}</div>
    );
};

export default List;
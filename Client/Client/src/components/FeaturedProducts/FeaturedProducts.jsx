import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='featuredProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Herbal and Ayurvedic products are derived from natural sources such as herbs, plants, and minerals. These products have been used for centuries in traditional medicine to promote health and well-being.Herbal products include a wide range of items such as teas, tinctures, essential oils, and supplements. They are typically made from plant extracts and are used to support various aspects of health, including immune function, digestion, and stress relief.
                </p>
            </div>
            <div className='bottom'>
                {error
                    ? "Something went wrong!"
                    : loading
                    ? "loading"
                    : data?.map((item) => <Card item={item} key={item.id} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;
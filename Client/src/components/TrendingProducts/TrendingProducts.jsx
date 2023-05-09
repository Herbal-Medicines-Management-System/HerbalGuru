import React from 'react';
import "./TrendingProducts.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';
import useFetch from "../../hooks/useFetch";

const TrendingProducts = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='trendingProducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                    Ashwagandha - an adaptogenic herb used in Ayurvedic medicine to help reduce stress, anxiety, and fatigue. It is believed to promote relaxation, improve brain function, and boost immunity.
                    Turmeric - a spice commonly used in Ayurvedic medicine for its anti-inflammatory and antioxidant properties. It has gained popularity as a natural remedy for conditions such as arthritis, heart disease, and digestive issues.
                    Triphala - a blend of three fruits (amla, haritaki, and bibhitaki) used in Ayurvedic medicine to support digestion, detoxification, and overall health.
                    Holy Basil (Tulsi) - an herb considered sacred in Ayurveda, used to promote respiratory health, reduce stress, and support the immune system.
                </p>
            </div>
            <div className='bottom'>
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <CardWithoutOldPrice item={item} key={item.id} />)
                }
            </div>
        </div>
    );
};

export default TrendingProducts;
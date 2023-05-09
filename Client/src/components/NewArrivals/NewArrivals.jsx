import React from 'react';
import "./NewArrivals.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';
import useFetch from "../../hooks/useFetch";

const NewArrivals = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='newArrivals'>
            <div className='top'>
                <h1>{type} arrivals</h1>
                <p>
                    Moringa - a nutrient-dense plant often used in Ayurvedic medicine for its anti-inflammatory properties, it is believed to boost energy, improve digestion, and support healthy blood sugar levels.Trikatu - a blend of three spices (ginger, black pepper, and long pepper) used in Ayurvedic medicine to support digestion, boost metabolism, and reduce inflammation.Brahmi - an adaptogenic herb used in Ayurvedic medicine to support cognitive function, reduce anxiety, and promote relaxation.Shatavari - an herb commonly used in Ayurvedic medicine to support women's health, it is believed to balance hormones, improve fertility, and boost immunity.
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

export default NewArrivals;
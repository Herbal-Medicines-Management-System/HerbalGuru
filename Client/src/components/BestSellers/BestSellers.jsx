import React from 'react';
import "./BestSellers.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';
import useFetch from "../../hooks/useFetch";

const BestSellers = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='bestSellers'>
            <div className='top'>
                <h1>{type} seller</h1>
                <p>
                    Turmeric: Turmeric is a popular Ayurvedic herb that has anti-inflammatory and antioxidant properties. It is often used in cooking and as a dietary supplement.Amla: Amla, also known as Indian gooseberry, is a fruit that is rich in vitamin C and has antioxidant and anti-inflammatory properties. It is often used in Ayurvedic medicine to support the immune system and promote healthy skin and hair.Neem: Neem is an Ayurvedic herb that has antibacterial and antifungal properties. It is often used in skincare products to treat acne and other skin conditions.
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

export default BestSellers;
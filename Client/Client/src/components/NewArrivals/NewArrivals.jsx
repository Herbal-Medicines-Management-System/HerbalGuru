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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
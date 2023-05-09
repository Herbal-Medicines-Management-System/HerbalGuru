import React from 'react';
import "./CustomersViwed.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';
import useFetch from "../../hooks/useFetch";

const CustomersViwed = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className='customersViwed'>
            <div className='top'>
                <h1>{type} also viewed</h1>
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

export default CustomersViwed;
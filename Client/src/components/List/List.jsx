import React from 'react';
import "./List.scss";
import CardWithoutOldPrice from '../CardWithoutOldPrice/CardWithoutOldPrice';
import useFetch from '../../hooks/useFetch';

const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=${sort}`
    );
    
    return (
        <div className='list'>{loading ? "loading" : data?.map(item => (
            <CardWithoutOldPrice item={item} key={item.id} />
        ))}</div>
    );
};

export default List;
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Category.scss";
import List from '../../components/List/List';

const Category = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort, setSort] = useState(null)
  
  return (
    <div className='category'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Bath Products</h2>
          <div className='inputItem'>
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Aromatherapy</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='2'>Bath & Shower</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='3'>Body & Massage Oils</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='4' value={4} />
            <label htmlFor='4'>Face Masks & Hand Sanitizers</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='5' value={5} />
            <label htmlFor='5'>Hair Care</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='6' value={6} />
            <label htmlFor='6'>Lip Care</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='7' value={7} />
            <label htmlFor='7'>Lotion</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='8' value={8} />
            <label htmlFor='8'>Medicine Cabinet</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='9' value={9} />
            <label htmlFor='9'>Men's Grooming</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox' id='10' value={10} />
            <label htmlFor='10'>Oral Care</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by Price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={10000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={e => setSort("asc")} />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value='desc' name='price' onChange={e => setSort("desc")} />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src='/img/bath_banner.jpg' alt='bath_banner' />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
        <hr></hr>
      </div>
    </div>
  );
};

export default Category;
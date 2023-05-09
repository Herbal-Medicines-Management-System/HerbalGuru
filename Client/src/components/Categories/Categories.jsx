import React from 'react';
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='categories'>
            <div className='col'>
                <div className='row'>
                    <img src="/img/bath.jpg" alt="bath" />
                    <button>
                        <Link className='link' to='/category/1'>Bath</Link>
                    </button>
                </div>
                <div className='row'>
                    <img src="/img/beauty.jpg" alt="beauty" />
                    <button>
                        <Link className='link' to='/category/2'>Beauty</Link>
                    </button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src="/img/grocery.jpg" alt="grocery" />
                    <button>
                        <Link className='link' to='/category/3'>Grocery</Link>
                    </button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src="/img/health.jpg" alt="health" />
                            <button>
                                <Link className='link' to='/category/4'>Healthy Home</Link>
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img src="/img/sports.jpg" alt="sports" />
                            <button>
                                <Link className='link' to='/category/5'>Sports</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src="/img/supp.jpg" alt="supp" />
                    <button>
                        <Link className='link' to='/category/6'>Supplements</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;
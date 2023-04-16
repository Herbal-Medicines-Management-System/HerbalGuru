import React, {useState} from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "/img/b1.webp",
            title: "NOW Foods, Essential Oils, Lavender, 1 fl oz (30 ml)",
            desc: "NOW Foods is a natural products company that offers a wide range of supplements, personal care products, and essential oils. The Essential Oils Lavender product is a 1 fl oz (30 ml) bottle of pure lavender essential oil, which is extracted from the flowers of the lavender plant through a steam distillation process. Lavender essential oil is popular for its calming and relaxing properties, and can be used in aromatherapy, massage, or as a natural fragrance for DIY beauty and cleaning products. NOW Foods' lavender essential oil is 100% pure and free of synthetic ingredients, and is tested for purity and quality.",
            price: 2500,
        },
        {
            id: 2,
            img: "/img/b2.webp",
            title: "Cococare, 100% Lavender, 1 fl oz (30 ml)",
            desc: "NOW Foods is a natural products company that offers a wide range of supplements, personal care products, and essential oils. The Essential Oils Lavender product is a 1 fl oz (30 ml) bottle of pure lavender essential oil, which is extracted from the flowers of the lavender plant through a steam distillation process. Lavender essential oil is popular for its calming and relaxing properties, and can be used in aromatherapy, massage, or as a natural fragrance for DIY beauty and cleaning products. NOW Foods' lavender essential oil is 100% pure and free of synthetic ingredients, and is tested for purity and quality.",
            price: 1800,
        },
    ]

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt='' />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className='price'>1 × ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>Rs. 2500</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    );
};

export default Cart;
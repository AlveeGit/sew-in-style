import React from 'react';
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
    
    const {id,productName,price,productImage} = props.data;
    const {addToCart, cartItems} = React.useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} alt="" />

            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>

            <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart {cartItemAmount> 0 && <span>({cartItemAmount})</span>}</button>

        </div>
    );
};

export default Product;
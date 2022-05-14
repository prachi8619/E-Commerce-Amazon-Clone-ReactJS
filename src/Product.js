import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const { dispatch } = useStateValue();

    const addToBasket = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                title: title
            },
        });
    };

    return (
            <div className="product" id={id}>
                <div className="product__info" key={id}>
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small><strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))}
                    </div>
                </div>
                <img src={image} alt="" className="product__image" />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
    );
}

export default Product;
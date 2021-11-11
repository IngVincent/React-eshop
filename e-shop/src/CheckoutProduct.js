import React from "react";
import "./CheckoutProduct.css"

function CheckoutProduct({id, image, title, price, rating})
{
    return(
            <>
                <div className="checkoutProduct">
                 <img src={image}
                 alt="" className="checkoutProduct_image" />
                </div>
                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">
                        {title}
                    </p>
                    <p className="checkoutProduct_price">
                     <small>$</small>
                     <strong>{price}</strong>
                    </p>
                <div className="checkoutProduct_rating">
                {Array(rating)
                        .fill()
                        .map((_, i) =>(
                            <p>⭐</p>
                        ))}
                </div>
                <button>Remove Item</button>
            </div>
            </>
    )
}

export default CheckoutProduct
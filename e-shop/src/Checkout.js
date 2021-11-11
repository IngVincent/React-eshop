import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout(){
    return(
            <div className="checkout">
                <div className="checkout_left">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkout_ad" />
                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                        <CheckoutProduct />
                        <CheckoutProduct />
                        <CheckoutProduct />
                    </div>     
                </div>
                <div className="checkout_right">
                    <Subtotal/>
                </div>     
            </div>

       
    )
}

export default Checkout
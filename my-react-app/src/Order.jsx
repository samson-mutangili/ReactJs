import React, {useState} from "react";

function Order(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleQuantityChange = (event) =>{
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) =>{
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) =>{
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <textarea name="comment" id="comment" placeholder="Enter delivery instructions" cols="30" rows="10" value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select name="payment" id="payment" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Mpesa">Mpesa</option>
                <option value="Paypal">Paypal</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment method: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" id="pick-up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" id="delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );


}

export default Order
import { useState, Fragment } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import "../css/Description.css"
const Description = ({label, heading, body, price, original, promo}) => {
    const [digit, setDigit] = useState(0)
    const handleInc=()=>{
        setDigit(digit+1)
    }
    const handleDec=()=>{
        if (digit > 0){
        setDigit(digit-1)
        }
    }
    return (
        <>
            <p className="label">{label}</p>
            <h3 className="head">{heading}</h3>
            <p className="detail">{body}</p>
                <div className="prices">
                    <div className="price-promo">
                        <h4>{price}</h4>
                        <p className="promo">{promo}</p>
                    </div>
                    <p className="strikethrough">{original}</p>
                    
                </div>
            <div className="wrap-all">
                <div className="num-btn">
                    <AiOutlineMinus className="num" onClick={handleDec}/>
                    {digit}
                    <AiOutlinePlus className="num" onClick={handleInc}/>
                    
                </div>
                <button className="add-btn">
                    <FiShoppingCart className="cart"/> Add to Cart
                </button>
            </div>
        </>
      );
}
 
export default Description;
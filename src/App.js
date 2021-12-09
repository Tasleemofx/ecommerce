import React, { Fragment, useState } from "react"
import Description from "./components/Description";
import Nav from "./components/Nav";
import Thumbnail from "./components/Thumbnail";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi"
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md"
import { AiOutlineCloseCircle } from "react-icons/ai"
import "./css/App.css"

function App() {
  const [num, setNum] = useState(1);
  const [isOpen, setIsOpen]= useState(false);
  const handleNavClick=()=>{
    setIsOpen(!isOpen)
  }
  const arrowLeftClick=()=>{
    if(num >1){
    setNum(num - 1)
    }
  }
  const arrowRightClick = () => {
    if (num < 4) {
      setNum(num + 1)
    }
  }
  return (
    <Fragment>
      
      <section className="nav-sec">
        <AiOutlineMenu className="burger"
          onClick={handleNavClick} />
        <h3 className="logo"> sneakers </h3>
        
        <>
          {isOpen? 
            <>
              <Nav className="nav-mobile" extra={<AiOutlineCloseCircle
                className="close"
                onClick={handleNavClick}/>}
              />
            </>
          : <></>}
            <Nav className="nav-large"/>
        </>
        
        <div>
          < FiShoppingCart className="cart" />
          <img src="./images/image-avatar.png" alt="avatar"
            className="avatar" />
        </div>
      </section>
      <section className="tops">
        <div className="pics"> 
          <MdOutlineArrowLeft className="arrow left"
          onClick={arrowLeftClick}
          />
        
            <img src={`./images/image-product-${num}.jpg`}
              alt="sneaker-img" className="main-img" />
            <MdOutlineArrowRight className="arrow right"
              onClick={arrowRightClick}
            />
          <article className="thumbnail-grp">
            <Thumbnail src="./images/image-product-1-thumbnail.jpg"
             className="thumbnail"
             onClick={()=>setNum(1)}/>
            <Thumbnail src="./images/image-product-2-thumbnail.jpg"
             className="thumbnail"
              onClick={()=>setNum(2)}/>
            <Thumbnail src="./images/image-product-3-thumbnail.jpg"
             className="thumbnail"
              onClick={()=>setNum(3)}/>
            <Thumbnail src="./images/image-product-4-thumbnail.jpg"
             className="thumbnail"
              onClick={()=>setNum(4)}/>
          </article>
        </div>
        <article className="description">
          <Description 
          label="SNEAKER COMPANY"
          heading="Fall Limited Edition Sneakers"
          body="These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price="$125.00"
          original="$250.00"
          promo="50%"/>
        </article>
      </section>
    </Fragment>
  );
}

export default App;

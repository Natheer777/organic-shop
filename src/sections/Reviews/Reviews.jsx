import React from "react"

import PaperBack from "../../assets/image/leaves-free-img.png"
import paper from "../../assets/image/logo-leaf-new.png";

import './Reviews.css'

import {Card_Reviews} from "../../components/index"

import Data from '../../Data/Card_Reviews'

import { FaCartPlus } from "react-icons/fa";


export default function Reviews(){

  const card = Data.map((card) =>{
    return(
      <Card_Reviews
      key={card.id}
      image={card.Image}
      title={card.title}
      pargragh={card.pargragh}
      />
    );
  });

  return (
    <>
    <div className="container text-center ">
    <div className="row">
      <h1>Customers Reviews</h1>
      <p className="mb-4 mt-4 ">

      <img src={paper} alt="" />
      </p>
      <div><img className="paperBack" src={PaperBack} alt="" /></div>
   <div className="col-lg-4  mt-5 left">{card[0]}</div>
   <div className="diffrinse  col-lg-4 top ">
    <h2 className="text-white">Deal Of The Day 15% Off On All Vegetables!</h2>
    <p className="text-white">I am text block. Click edit button to change this tex em ips.</p>
    <button className="ButtonShop">Shop Now <FaCartPlus/></button>
   </div>
   <div className="col-lg-4  mt-5 right">{card[1]}</div>
    </div>
    </div>
    </>
  )
}

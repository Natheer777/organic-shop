import React from 'react'
import './Main.css'
import { FaCartPlus } from "react-icons/fa";

import paper from '../../assets/image/logo-leaf-new.png'
import underPaper from '../../assets/image/logo-leaf2-free-img.png'
import product from '../../assets/image/organic-products-hero.png'
import { Link } from 'react-router-dom';

const Main = () => {


  return (
    <div>
         <header className='container'>
      <div className='row'>
        <div className='col-lg-7 left'>
          <img className='product ' src={product} alt="" />
        </div>
        <div className='title col-lg-5 text-center hidden'>
          <b>
            <img src={paper} alt="" />
          </b>
          <p className='mt-2 opacity-75'>Best Quality Products</p>
          <h1 className='main-title mb-3'>Join The Organic Movement!</h1>
          <p className='main-subtitle mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <Link to="/Everything"><button className='ButtonShop mt-2 mb-4'>shop Now  < FaCartPlus/></button> </Link>
          <div>
            <img className='underpaper' src={underPaper} alt="" />
          </div>
        </div>
      </div>
      
    </header>
    </div>
  )
}

export default Main
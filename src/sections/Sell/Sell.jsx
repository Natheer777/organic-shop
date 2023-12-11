import React from 'react'
import "./Sell.css"
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";


const Sell = () => {
  return (
    <div className='main bg-dark p-5 mt-5'>
        <p className='text-white d-flex align-items-center fs-2'>Get 25% Off On Your First Purchase!</p>
   <Link to="/Everything" > <button className='text-white ButtonShop me-5 p-4'>Shop Now <FaCartPlus/></button></Link>    
    </div>
  )
}

export default Sell
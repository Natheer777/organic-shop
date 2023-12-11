import React from 'react'
import "./Elemntor.css"

import {FaAddressBook} from 'react-icons/fa'
import {FaCarSide} from 'react-icons/fa'
import {FaCheckSquare} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'

const Elemntor = () => {
  return (
    <div className='containers bg-black text-white text-center'>
        {/* <div className='row'> */}

        <div className="card1 left">
            <h4><FaCarSide/> Free Shipping</h4>
            <p>Above $5 Only</p>
        </div>
        <div className="card2 left">
            <h4><FaAddressBook/> Certified organic</h4>
            <p>100% Guaratee</p>
        </div>
        <div className="card3 left">
            <h4><FaCheckSquare/> Huge Savings</h4>
            <p>At Lowest Price</p>
        </div>
        <div className="card4 left">
            <h4><FaHeart /> Easy Retrurns</h4>
            <p>No Question Asked</p>
        </div>
    
        </div>
    // </div>
  )
}

export default Elemntor
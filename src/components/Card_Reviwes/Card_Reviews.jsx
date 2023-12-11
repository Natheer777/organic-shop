import React from 'react'
import './Card_Reviews.css'
import {AiFillStar} from 'react-icons/ai'

const Card_Reviews = (props) => {
  return (
    <>
    <div className='Card_Rewiwes'>
    <div className='Crad_wrapper'>
    <h5> <p className='AiFillStar'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>{props.pargragh}</h5>
    <div>
    <img src={props.image}/> <span>{props.title}</span>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Card_Reviews
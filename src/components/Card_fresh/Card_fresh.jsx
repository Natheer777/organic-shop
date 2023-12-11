import React from 'react'
import "./Card_fresh.css"
const Card_fresh = (props) => {
  return (
    <div className='container card_fresh_item text-center mt-5 mb-5 rounded pt-5 pb-5 pb-3'>
        <div className='Card_wrraper'>
            <h3 className='fw-bold pb-2 mb-4'>{props.title}</h3>
            <p>{props.pargragh}</p>
            <div className='between'>
            <button>SHOP NOW </button>
            <img  src={props.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card_fresh
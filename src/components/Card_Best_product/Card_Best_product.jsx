import React from 'react'
import './Card_Best_product.css'
import {AiFillStar} from  'react-icons/ai'

const Card = (props) => {
  return (
    <div className='Best_product_item mb-5'>
        <div className='card_wrapperr'>
    <img className='product_item_img' src={props.image} alt="" />
        <div className='product_item_conent'>
           
            <p className='product_item_name'>{props.name}</p>
                <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
            
            <p className='product_item_price'>{props.price}</p>
        </div>
        </div>

    </div>
  )
}

export default Card;
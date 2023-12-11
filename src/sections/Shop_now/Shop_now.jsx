import React from 'react'
import "./Shop_now.css"

import HeadPaper from '../../assets/image/basil-leaf.png'

import {Card_fresh} from '../../components/index'

import Data from '../../Data/Shop_now'



const Shop_now = () => {
  const card = Data.map ((card) =>{
    return (
  
      <Card_fresh 
      key ={card.id}
      image ={card.Image}
      title ={card.title}
      pargragh ={card.pargragh}
      />
      )
    
  })
  return (
    <>
    <div className='container'>
        <img className='paper'  src={HeadPaper} alt="" />
      <div className='row'>
    <div className='col-lg-4 col-md-12 m-auto left'>{card[0]}</div>
    <div className='col-lg-4 col-md-12 m-auto top'>{card[1]}</div>
    <div className='col-lg-4 col-md-12 m-auto right'>{card[2]}</div>
      </div>
   
      </div>
    </>



  
  )
}

export default Shop_now
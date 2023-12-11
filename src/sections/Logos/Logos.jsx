import React from 'react'
import './Logos.css'
import Data from '../../Data/Card_Logos'
import {Card_Logos} from '../../components/index'
export default function Logos(){

    const card = Data.map((card)=>{
        return(
            <Card_Logos
            key = {card.id}
            image = {card.Image}
            />
            );
    });

  return (
    <>
    <div className='container-Logos'>
        <div className='card_wrapper left'>{card[0]}</div>
        <div className='card_wrapper left'>{card[1]}</div>
        <div className='card_wrapper top'>{card[2]}</div>
        <div className='card_wrapper right'>{card[3]}</div>
        <div className='card_wrapper right'>{card[4]}</div>
    </div>
    </>
  )
}

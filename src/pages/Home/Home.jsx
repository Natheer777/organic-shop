import React from 'react'
import './Home.css'

import { Best_product,Shop_now, Elemntor, Header , Main ,Sell, Reviews ,Logos ,Footer} from '../../sections/index';

const Home = () => {
  return (
    <>
    <Header />
    <Main />
    <Elemntor />
    <Best_product />
    <Shop_now/>
    <Sell/>
    <Best_product />
    <Reviews />
    <Logos/>
    <Footer/>
    </>
  )
}

export default Home
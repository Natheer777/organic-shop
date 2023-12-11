import "./Shop.css";
import React,{useState , useEffect} from 'react'
import data from '../../Data/Shop_Everything'
import {Card_Shop_Everything} from '../../components/index'

export default function Shop() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const Card = data.map((Card)=>{
    return(
      <Card_Shop_Everything
      key = {Card.id}
      Image = {Card.Image}
      name={Card.name}
      price={Card.price}
      />
      )
  })


  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>

      <div className="contanier mt-4">
        <h1 className="Head_line text-center">Shop</h1>
        <div className="row w-100 m-auto">

          
          <div className="section1 col-lg-3 col-md-12">
            <input
              id="SearchInput"
              type="text"
              placeholder="Search Here...."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <h4 className="mb-2 mt-4">fun shopping 😀</h4>
          {Card[0]}
          {Card[1]}
          {Card[2]}
          {Card[3]}
          </div>

          <div className="section2 col-lg-9 col-md-12 col-sm-12">
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                }
              })
             .map((card)=>{
               return(
                <Card_Shop_Everything
                key={card.id}
                name={card.name}
                Image={card.Image}
                title={card.title}
                price={card.price} 
                />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
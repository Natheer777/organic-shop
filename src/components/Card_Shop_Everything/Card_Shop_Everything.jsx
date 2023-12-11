import React,{useState} from "react";
import "./Card_Shop_Everything.css";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";
export default function Card_Shop_Everything(props) {

  // const [result, setResult] = useState([]);

  // useEffect(() => {

  //   fetch("http://localhost:3031/Best_product")
  //     .then((Response) => Response.json())
  //     .then(data => setResult(data))

  // }, []);

  const [close , setClose] = useState(false)

  const [details , setDetails] = useState([])


  const detailsPage = (product)=>{
    setDetails([{...product}])
    setClose(true)
  }
  return (
    <>
    {
      close ?
      <div className="details_container">
        {
          details.map((x)=>{
            return(
              <>
              <div className="details_contact">
              <div className="details_info" key={x.id}>
                <button onClick={()=>setClose(false)} className="colse"><AiFillCloseCircle /></button>
                <div className="img_box mt-2">
                  <img src={x.Image} alt="" />
                </div>
                <h3 className="mt-2">{x.name}</h3>
              <h4 className="mt-2">{x.title}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quaerat provident. Atque numquam eius nihil veniam eligendi minima, saepe quis tenetur, nam at autem adipisci, placeat aperiam asperiores recusandae voluptatem?</p>
              <h5>{x.price}</h5>
              <button className="Add_Cart mt-2 mb-2">ADD TO CART</button>
              </div>
          </div>
              </>
            )
          })
        }
    </div>:null
    }
  

     
       <div className="Best_product_item mb-5 text-center m-auto" key={props.id} >
        <div className="card_wrapper">
            <img className="product_item_img"id="img" src={props.Image}alt="" />
          <div className="product_item_content">
            <b className="product_item_name">{props.name}</b>
            <p>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p className="product_item_price">{props.price}</p>
            <button id="detailsPage" onClick={()=>detailsPage(props)}>Viwe Details  </button>
          </div>
        </div>
      </div>
        
    </>
  );
}

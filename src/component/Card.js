import React,{useState} from 'react'
import Items from './Items';
import { products } from './Products';
import Checkout from "./Checkout"



export default function Card() {
    const [items, setItems] = useState(products)
  // const [total, setTotal] = useState(0)

    const [checkOut, setCheckOut] = useState(false)
        const chack= ()=>{
            
          setCheckOut(true)
           
        }
    var totalCartPrice = 0;
  return (<>
       {checkOut && <Checkout/>}
    {!checkOut && <div className='container my-3'>
        <div className="row my-3">
            
                {items.map((curitem)=>{
                  // totalCartPrice += curitem.price
                  totalCartPrice += curitem.price*curitem.quantity
                    return <div className="col-md-4"><Items key={curitem.id} {...curitem}/></div>
                   
                })}
                <hr  />
      
            
           <div className="col-md-8"></div>
           <div className="md-4">
             <div className="card card-body mt-3">
               <h4>Grand Total: <span className='flot-end'>{ totalCartPrice}</span></h4>
               <hr />
              
              <button type="button" className="btn btn-primary" onClick={chack}>CheckOut </button>
             </div>
           </div>
        </div>

    </div>}
    </>
  )
}

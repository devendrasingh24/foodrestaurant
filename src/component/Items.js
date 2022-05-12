import React,{useState} from 'react'

export default function Items({img,title, price}) {
  const [quantity, setQuantity] = useState(0)
  // const [total, setTotal] = useState(0)



  const handleDec = ()=>{
    if(quantity >1){
      setQuantity(prevCount=> prevCount-1)
    }else{
      setQuantity(0)
    }
    
  }
  const handleInc = ()=>{
    setQuantity(prevCount=> prevCount+1)
  }
  return (<>


    <div className="card"  >
    <img src={img} className="card-img-top" alt="img"/>
    <div className="card-body" style={{marginLeft:"0px"}}>
      <h2 className="card-title">{title}</h2>
      <p>price: {price} RS</p>
     
      <p>Total:{quantity}</p>
      <p>Cost(INR):{price*quantity}</p>
      <div className="d-grid gap-2 d-md-block my-2">
  <button className="btn btn-primary  btn-sm mx-2" type="button" onClick={handleInc}> + </button>
  <button className="btn btn-danger  btn-sm mx-1" type="button" onClick={handleDec}> - </button>

      </div>

    </div>
    
  </div>
  
  
     
     </>
  )
}


// const Toptal=()=>{

// }
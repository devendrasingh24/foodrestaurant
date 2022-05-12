import React,{useState} from 'react'
import Card from "./Card";

export default function Menu() {

    const [butt, setButt] = useState(false)
        const button= ()=>{
            if(true){
            setButt(true)
        }
        }
   return (<>

    {butt && <Card/>}
  
    
     {!butt && <div className='container  my-5'>
      <h1>Welcome to Food's </h1>
      <h1>Kitchen</h1>
      <button  onClick={button} type="button"   className="btn btn-primary" >Go To Menu</button>
      </div>}
      </>
      )
};
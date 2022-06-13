// import { Button } from 'bootstrap'
// import demo from "demo.jpeg"
import React from 'react'
export default function Product({product, onDelete}) {
    // const onView = (product )=>{
    //     // <ViewProduct product={product}/>
    //     console.log("ok");
    // }
    
  return (
   
    <div>
        
        <h4>{product.name}</h4>
        <h6>{product.price}</h6>
        <h6>{product.category}</h6>
        <h6>{product.brand}</h6>
        <p>{product.desc}</p>
       <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(product)}}>Delete</button>
       <button className='btn btn-danger ml-2 btn-sm'>View</button>

    </div>
  )
}

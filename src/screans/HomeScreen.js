import React from 'react'
import products from '../datasource/product'
function HomeScreen() {
  return (
    <div className='product'>
       <div className='firstrow'>
       <div className='card'>
       <h2>Quality phones</h2>
        <div style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr 1fr 1fr",
            maxWidth:"90%",
            margin:"20px auto"
        }}>
        {
        products.map(product=>(
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                border:"1px solid #dedede",
                padding:"10px",
                margin:"10px"
            }}>
            <img src={product.image} alt="" height={"230px"}/>
            <h5>{product.name}</h5>
            <h5>GH₵{product.price.toFixed(2)}</h5>
            </div>
        ))
        }
        </div>
       </div>

       </div>
    </div>
  )
}

export default HomeScreen
import React from 'react'
import "./home.css";


const cardContainer = {
    width: "250px",
    border: "2px solid black",
}

function home() {
  return (
    <div>
        <h1 style={{
          textAlign: "center"
          }}>
          Maybelline
          </h1>

          <div className='card-container'>  
          <div style={cardContainer}>
            <h1 className='product-name'>
              The Waterproof Mascara
            </h1>
            <h2 className='product-quantity'>
              1 Shade
            </h2>
            <button className='btn'>Buy Now</button>
          </div>

          <div style={cardContainer}>
            <h1 className='product-name'>
              Fit Me Matte +
            </h1>
            <h2 className='product-quantity'>
              18 Shade
            </h2>
            <button className='btn'>Buy Now</button>
          </div>

          <div style={cardContainer}>
            <h1 className='product-name'>
              Matte Liquid Lipstick
            </h1>
            <h2 className='product-quantity'>
              20 Shade
            </h2>
            <button className='btn'>Buy Now</button>
          </div>
          </div>
          
    </div>
  )
}

export default home
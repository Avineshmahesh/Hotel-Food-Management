import React from 'react'
import '../styles/Menu.css'

function MenuItem({ name,image,price} ) {
  return (
    <div className='MenuItem'>
        <div className='menuImage' style={{backgroundImage: `url(${image})`}} ></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  )
}

export default MenuItem
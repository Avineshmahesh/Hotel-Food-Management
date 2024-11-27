import React from 'react'
import { Link } from 'react-router-dom';
import backGround from '../assets/pizza-backgound.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${backGround})`}}>
        <div className='headerContainer' >
            <h3>Pedro's Pizza</h3>
            <p> PIZZA TO FIT ANY TASTE</p>
            <Link to="/home">
            <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
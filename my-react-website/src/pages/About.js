import React from 'react'
import Multiplep from '../assets/multiple.avif';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' 
        style={{backgroundImage: `url(${Multiplep})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Early eating establishments recognizable as restaurants in the modern sense emerged in Song dynasty China during the 11th and 12th centuries. In large cities, such as Kaifeng and Hangzhou, food catering establishments catered to merchants who travelled between cities. Probably growing out of tea houses and taverns which catered to travellers, Kaifeng's restaurants blossomed into an industry that catered to locals as well as people from other regions of China. As travelling merchants were not used to the local cuisine of other cities, these establishments were set up to serve dishes familiar to merchants from other parts of China. Such establishments were located in the entertainment districts of major cities, alongside hotels, bars, and brothels. The larger and more opulent of these establishments offered a dining experience similar to modern restaurant culture. According to a Chinese manuscript from 1126, patrons of one such establishment were greeted with a selection of pre-plated demonstration dishes which represented food options. Customers had their orders taken by a team of waiters who would then sing their orders to the kitchen and distribute the dishes in the exact order in which they had been ordered</p>
        </div>
    </div>
  )
}

export default About
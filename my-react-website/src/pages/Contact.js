import React from 'react'
import Multiplep from '../assets/multiple.avif'
import '../styles/Contacts.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style={{backgroundImage: `url(${Multiplep})`}}>
        </div>
        <div className='rightSide'>
            <h1>Contact us</h1>

            <form id='contact-form' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder='Enter the full name...' type="text" />

                <label htmlFor="email">Email</label>
                <input name="email" placeholder='Enter the full email...' type="email" />

                <label htmlFor="message">Message</label>
                <textarea rows="6" placeholder='Enter message' name='message' required></textarea>
                <button type='sumbit'>Send Message</button>
                </form>
        </div>
    </div>
  )
}

export default Contact
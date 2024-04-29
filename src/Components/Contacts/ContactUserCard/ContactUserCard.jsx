import React from 'react'
import './contactusercard.scss'
import profile from './profile.png'

const ContactUserCard = () => {
    return (
        <>
        <div className='usercard-container'>
            <img className='usercard-container__image' src={profile}></img>
            <div className='usercard-container__info'>
                <p className='usercard-container__name'>Markedia Hinds</p>
                <p className='usercard-container__title'>React Creator</p>
                <p className='usercard-container__bio'>Lorem Ipsem</p>
            </div>
        </div>
        </>
       
    )
}

export default ContactUserCard
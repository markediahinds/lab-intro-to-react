import React from 'react'
import './contacts.scss'
import ContactUserCard from './ContactUserCard/ContactUserCard'

const Contacts = () => {
    return (
        <div className='contacts-container'>
        <p className='contacts-container__header'>Contacts</p>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
        
        </div>
    )
}

export default Contacts
import React from 'react'
import './contacts.scss'
import ContactUserCard from './ContactUserCard/ContactUserCard'

const Contacts = () => {
    return (
        <div className='contacts-container'>Contacts
        <ContactUserCard className='contacts-container__card'/>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
        </div>
    )
}

export default Contacts
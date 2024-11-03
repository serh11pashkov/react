import './Contact.module.css';

import React from 'react'

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx'
import Hero from '../../components/Hero/Hero.jsx'

const Contact = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact;

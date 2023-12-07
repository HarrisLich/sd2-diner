import React from 'react';
import '../ContactPage.css';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div className="contact-page">
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
        </nav>
        <h1>Contact Uncle Tim's Diner</h1>
        <p>We would love to hear from you!</p>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: UncleTim’s@gmail.com</p>
          <p>Phone: (404) 623-7967</p>
          <p>Address: </p>
        </div>
        <div className="opening-hours">
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 8:00 AM - 12:00 AM</p>
          <p>Saturday - Sunday: 9:00 AM - 3:00 AM</p>
        </div>
        <div className="restaurant-image">
          <img src="https://www.uncletimsfoodtruck.com/uploads/b/4b188a30-0901-11eb-8fb3-0d60bc1171cb/UncleTims_Logo_new.jpg" />
        </div>
      </div>
      <Footer/>
    </div>

  );
};


export default ContactPage;
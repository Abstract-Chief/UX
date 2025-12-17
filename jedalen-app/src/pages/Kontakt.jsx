import React from 'react';
import Header from '../components/Header';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import './Kontakt.css';

const Kontakt = () => {
  const contacts = [
    {
      image: '/img/person2.jpg',
      title: 'Vedúca úseku stravovacích služieb',
      name: 'Ing. Aneta Jurík',
      phone: '+421 55 602 5813',
      mobile: '+421 917 751 407',
      email: 'aneta.jurik@tuke.sk'
    },
    {
      image: '/img/person.jpg',
      title: 'Asistentka kancel a sektora kontroly',
      name: 'Ing. Aneta Jurík',
      phone: '+421 55 602 5813',
      mobile: null,
      email: 'aneta.jurik@tuke.sk'
    }
  ];

  return (
    <div className="kontakt-page">
      <Header />
      <main className="kontakt-content">
        <div className="kontakt-container">
          <div className="contacts-section">
            {contacts.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
          <div className="form-section">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kontakt;

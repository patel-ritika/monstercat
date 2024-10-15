import React from 'react';
import Aboutcontacttop from './contact/Aboutcontacttop';
import Accordion from './contact/Accordion';
import Contactform from './contact/Contactform';
import ContactFooter from './contact/ContactFooter';

const Contact = () => {
  return (
    <div>
      <Aboutcontacttop/>
      <Accordion/>
      <Contactform/>
      <ContactFooter/>
    </div>
  );
}

export default Contact;

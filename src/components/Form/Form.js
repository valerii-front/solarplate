import React, { useState } from 'react';
import axios from 'axios';


import './Form.css';

const Form = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', subject: '', description: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //destructure from inputs 
    const { name, email, subject, description } = inputs;
    axios.post('/sendtome', {
      //make an object to be handled from req.body on the backend. 
      email,
      name,
      subject,
      //change the name to represent text on the backend.
      text: description
    });
  };
  return (
    <div className="form__section form">
      <div className="container">
        <h3>
          Zkontaktuj z nami !
        </h3>
        <form
          className="contact_form"
          onSubmit={handleSubmit}
        // method="POST"
        // action="send" 
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Imię.."
            value={inputs.name}
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email.."
            value={inputs.email}
            onChange={handleChange}
          />

          <input
            id="subject"
            name="subject"
            placeholder="Temat.."
            value={inputs.subject}
            onChange={handleChange}
          />

          <textarea
            id="description"
            name="description"
            placeholder="Napisz nam.."
            value={inputs.description}
            onChange={handleChange}
          >
          </textarea>

          <button
            className="button"
            type="submit"
            value="Submit"
          // onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );

};
export default Form;
import React from 'react';
import { useState } from 'react';

function ContactForm() {
  const [nombre, setNombre] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [checkEmail, setCheckEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault()
    let caracteresNombre = [...nombre]
    caracteresNombre.length < 3 ? alert('nombre muy corto') : console.log(nombre, email, checkEmail)
    email === checkEmail ? console.log('datos correctos') : alert('emails no coinciden')
    setNombre('')
    setEmail('')
    setCheckEmail('')
  }

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
      <label>Nombre:</label>
      <br />
      <input
        name='nombre'
        type='name'
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <br />
      <label>Telefono:</label>
      <br />
      <input
        name='phone'
        type='phone'
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        name='email'
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <label>Confirmacion email:</label>
      <br />
      <input
        name='checkEmail'
        type='email'
        value={checkEmail}
        onChange={e => setCheckEmail(e.target.value)}
      />
      <br />
      <input
        type='submit'
        value='Enviar'
      />
    </form>
  )
}

export default ContactForm;
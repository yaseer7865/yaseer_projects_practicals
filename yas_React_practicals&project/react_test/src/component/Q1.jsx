//Create a component that takes inputs for user details (name, age, email). 
import React from 'react'
import  { useState } from 'react';

const Q1 = () => {

    const [user, setUser] = useState({ name: '', age: '', email: '' });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <form>
    <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
    <input name="age" placeholder="Age" value={user.age} onChange={handleChange} />
    <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
    <button type="button" onClick={() => console.log(user)}>Submit</button>
  </form>
  )
}

export default Q1

import React from 'react'
import "../App.css"
import useInput from '../hooks/useInput'

const Register = () => {
  // states
  const fullName = useInput("");
  const email = useInput("");
  const passowrd = useInput("");

  const submitForm = (event) => {
    event.preventDefault()
    alert(`
    Nombre completo: ${fullName.value}
    Email: ${email.value} 
    Password: ${passowrd.value}`)
}
  return (
    <form onSubmit={submitForm} className="App">
      <h3>REGISTER</h3>
      <input placeholder="Fullname" {...fullName} />
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...passowrd} />
      <button type="submit">Sign in</button>
    </form>
  )
}

export default Register

import React, { useState } from 'react'
import './Signup.css'
import Appsubmitbutton from '../../components/appsubmitbutton/Appsubmitbutton'
import useAuthentication from '../../hooks/useAuthentication';

export default function Signup() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [validationError, setValidationError] = useState("");

    const {signup,authError} = useAuthentication()

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!firstName){
            setValidationError("First Name should not be empty")
            return
        }
        if(!lastName){
            setValidationError("Last Name should not be empty")
            return
        }
        if(!email){
            setValidationError("Email should not be empty")
            return
        }
        if(!password){
            setValidationError("Password should not be empty")
            return
        }

        setValidationError("");

        signup({email,password,firstName,lastName})

    }

  return (
    <div className='outer-container'>
        <h2 className='signup-header'>Signup</h2>

    <form onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="firstname" className="form-label">First name</label>
    <input type="text" className="form-control" id='firstname' value={firstName} onChange={handleFirstName}/>
  </div>

  <div className="mb-3">
    <label htmlFor="lastname" className="form-label">Last name</label>
    <input type="text" className="form-control" id='lastname' value={lastName} onChange={handleLastName}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmail}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword}/>
    <div id="passwordHelp" className="form-text">Password must contain above 8 characters.</div>
    <div id="passwordHelp" className="form-text"> include letters(a-z), numbers(0-9) and symbols($)</div>
  </div>

        {validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}

        {authError && (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
  
        <div className="float-end">
        <Appsubmitbutton  title="Signup "/>
        </div>

    </form>
    </div>
  )
}

import React, { useState } from 'react'
import Appsubmitbutton from '../../components/appsubmitbutton/Appsubmitbutton'
import './Login.css'
import useAuthentication from '../../hooks/useAuthentication';


export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [validationError, setValidationError] = useState("");

    const {login,authError} = useAuthentication()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email){
            setValidationError("Email should not be empty")
            return
        }
        if(!password){
            setValidationError("Password should not be empty")
            return
        }

        setValidationError("");
       
        login({email,password})
    }

  return (
    <div className='outer-container'>
        <h2 className='signup-header'>Login</h2>

    <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmail}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword}/>
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
        <Appsubmitbutton  title="Login"/>
        </div>

    </form>
    </div>
  )
}

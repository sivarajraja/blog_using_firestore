import './Appsubmitbutton.css'
import React from 'react'

export default function Appsubmitbutton({onClick,title}) {
  return (
    <button className = {title==="Delete"? "btn btn-danger":"btn btn-success"} type='submit' onClick={onClick} >{title}</button>
  )
}
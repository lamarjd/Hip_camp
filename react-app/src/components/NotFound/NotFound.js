import React from 'react'
import Error from "../../assets/404-2.png"
import "./NotFound.css"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img 
    //   style={{width: "100vh"}}
      id="not-found" alt="Error" src={Error}/>
    </div>
  )
}

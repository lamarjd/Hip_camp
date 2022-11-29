import React from 'react'
import wakeUp from "../../assets/tent-view.png"
import "./SplashPage.css"

export default function SplashPage() {
  return (
    <div className="splash-container">
        <div className="splash-words">
            <h1>Find yourself outside.</h1>
        <div>
            <h3>Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</h3>
        </div>
        </div>

        <div className="splash-img-container">
        <img id="wake-up" alt="wake-up" src={wakeUp}/>
        </div>

    </div>
  )
}

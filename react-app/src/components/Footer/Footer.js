import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
        <div className="about-me">
            <h6>About the Developer</h6>
          <i onClick={(e) => (window.location = 'https://github.com/lamarjd/Hip_camp')}className="fa-brands fa-github"></i>

          <p onClick={(e) => (window.location = 'https://www.linkedin.com/in/jacob-lamar-73449040/')}>LinkedIn</p>
        </div>
    </div>
  )
}

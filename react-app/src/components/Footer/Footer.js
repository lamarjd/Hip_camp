import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
        <div className="about-me">
            {/* <h6 id="about-text">About the Developer</h6> */}
          <i id="links" onClick={(e) => (window.location = 'https://github.com/lamarjd/Hip_camp')}className="fa-brands fa-github"></i>

          <i id="links" onClick={(e) => (window.location = 'https://www.linkedin.com/in/jacob-lamar-73449040/')}class="fa-brands fa-linkedin"></i>
        </div>
    </div>
  )
}


import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import "./test.css"


const Test = () => {

    const images = ["1", "2", "3", "4"]

  return (
    <div className="daddy">

            {images.map((i => (

        <div className="daddy">

          {images[i] % 2 === 0 ? 
          
          (
            <div className="Even">Even</div>

          ) : (

            <div className="Odd"> Odd</div>

          )}

    </div>
    )))}



    </div>
  );
}

export default Test;
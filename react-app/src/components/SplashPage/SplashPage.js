import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import wakeUp1 from "../../assets/tent-and-view.png";
import wakeUp2 from "../../assets/tent-view.png";
// import wakeUp3 from "../../assets/wake-up.png"
import wakeUp4 from "../../assets/wakeUp4.png";
import wakeUp5 from "../../assets/wakeUp5.png";
import wakeUp6 from "../../assets/wakeUp6.png";
import wakeUp7 from "../../assets/wakeUp7.png";
import wakeUp8 from "../../assets/wakeUp8.png";
// import wakeUp9 from "../../assets/wakeUp9.png"
import "./SplashPage.css";

export default function SplashPage() {
  const imgSources = {
    src1: wakeUp1,
    src2: wakeUp2,
    // src3: wakeUp3,
    src4: wakeUp4,
    src5: wakeUp5,
    src6: wakeUp6,
    src7: wakeUp7,
    src8: wakeUp8,
    // src9: wakeUp9,
  };

  function getRandom() {
    let srcVals = Object.values(imgSources);
    return srcVals[Math.floor(Math.random() * srcVals.length)];
  }

  const timeout = (cb) => {
    setTimeout(() => {
      getRandom();
    }, 300);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {}, []);

  // console.log("Random src", getRandom(imgSources))
  // console.log("Random src", getRandom(imgSources))
  // console.log("Random src", getRandom(imgSources))

  return (
    <div className="splash-container">
      <div className="splash-words">
        <h1 id="find">Find yourself outside.</h1>
    
          <div className="wrap">
            <h2 id="wrap">
              Discover and book tent camping, RV <br />
              parks, cabins, treehouses, and glamping.
            </h2>
          </div>
    
      </div>

      <div className="search">
        <NavLink to="/spots" exact={true}>
          Explore All Spots
        </NavLink>
        {/* <input placeholder="Search"></input> */}
        <br />
      </div>
      <div className="splash-img-container">
        <img id="wake-up" alt="wake-up" src={getRandom()} />
      </div>
    </div>
  );
}

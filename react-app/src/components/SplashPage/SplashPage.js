import React from 'react'
import wakeUp1 from "../../assets/tent-and-view.png"
import wakeUp2 from "../../assets/tent-view.png"
import wakeUp3 from "../../assets/wake-up.png"
import "./SplashPage.css"



export default function SplashPage() {

    const imgSources = {
        src1: wakeUp1,
        src2: wakeUp2,
        src3: wakeUp3,
    }

    
    
    function getRandom() {
        let sourcesValues = Object.values(imgSources);
        // console.log(sourcesValues)
        // let sourcesKeys = Object.keys(imgSources);
        // console.log(sourcesKeys)

        
        // return sourcesValues[Math.floor(Math.random() * sourcesValues.length)] 

        return sourcesValues[Math.floor(Math.random() * sourcesValues.length)]
    }

    // console.log("Random src", getRandom(imgSources))
    // console.log("Random src", getRandom(imgSources))
    // console.log("Random src", getRandom(imgSources))

    




    // console.log(Math.random(sources.length).toFixed(2))

    // sources.map(src => {
    //     console.log(src)
    // })


    // randomPic(imgSources);

  return (
    <div className="splash-container">
        <div className="splash-words">
            <h1>Find yourself outside.</h1>
        <div>
            <h3>Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</h3>
        </div>
        </div>

        <div className="splash-img-container">
        <img id="wake-up" alt="wake-up" src={getRandom()}/>
        </div>

    </div>
  )
}

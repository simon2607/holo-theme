import React from "react"
import AboutTeamCard from "./aboutTeamCard"

import IMAGE1 from "../../images/2.jpeg"
import IMAGE2 from "../../images/16.jpeg"
import IMAGE3 from "../../images/10.jpeg"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
     <img alt="Image" src={IMAGE1}></img>
     <img alt="Image" src={IMAGE2}></img>
     <img alt="Image" src={IMAGE3}></img>
     
    </div>
  )
}

export default AboutGrid

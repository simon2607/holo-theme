import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/about.jpg"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-10xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-76 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          {/* <h1 className="font-bold text-xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            Mengapa Memilih Simply Plus Education?
          </h1> */}
          <h1 className="text-black text-6xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-3xl">
            Belajar Nyaman di Rumah, Hasil Maksimal Bersama Guru Berpengalaman & Terbaik!
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader

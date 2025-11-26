import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-background.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              Layanan les private di Simply Plus Education sangat memuaskan. Tutor mengajar dengan profesional dan mampu menyampaikan materi dengan jelas. 
              Komunikasi berjalan baik dan penjadwalan sangat fleksibel sesuai kebutuhan. Kami melihat perkembangan positif pada hasil belajar anak. Sangat direkomendasikan.
            </div>
            <div className="mt-10">
              
              <p className="text-black text-sm font-semibold opacity-50">
                ⭐️⭐️⭐️⭐️⭐️ Review Orang Tua Dari Aditya
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial

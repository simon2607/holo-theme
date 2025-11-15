import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
        <div className="mt-10  flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Guru Profesional & Ramah</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Belajar Sesuai Kebutuhan Siswa</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fleksibel & Nyaman di Rumah</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">Pendekatan Personal</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-4xl text-gradient bg-gradient-to-r from-pink to-purple">
          Belajar Lebih Dekat, Hasil Lebih Nyata.
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg text-justify">
         Di Simply Plus Education, kami percaya bahwa setiap anak memiliki cara belajar yang unik. Karena itu, kami menghadirkan layanan les privat di rumah yang disesuaikan dengan kebutuhan, karakter, dan gaya belajar masing-masing siswa. Dengan pendekatan personal dan tutor berpengalaman, kami membantu siswa tidak hanya memahami pelajaran, tetapi juga menumbuhkan rasa percaya diri dan semangat belajar.

Kami berkomitmen untuk menjadikan proses belajar lebih efektif, nyaman, dan menyenangkan — langsung di rumah Anda. Mulai dari siswa TK hingga SMA, bahkan untuk persiapan ujian dan tes masuk perguruan tinggi, Simply Plus Education siap mendampingi setiap langkah perjalanan akademik Anda.
        </p>
      </div>
    </div>
  )
}

export default WorkPage

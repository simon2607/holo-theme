import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/33.jpeg"
import Image1 from "../../images/11.jpeg"
import Image2 from "../../images/12.jpeg"
import Image3 from "../../images/13.jpeg"
import Image4 from "../../images/bukti1.jpeg"
import Image5 from "../../images/bukti2.jpeg"
import Image6 from "../../images/bukti3.jpeg"


const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="container w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl text-center">Belajar Nyaman di Rumah Sendiri</h3>
            {/* <h4 className="mt-10 text-black  opacity-70 text-xl">95+</h4> */}
          </div>

          <div className="container w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Guru Profesional & Peduli</h3>
            {/* <h4 className="mt-10 text-white opacity-70 text-xl">100</h4> */}
          </div>
          <div className="container w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Jadwal Fleksibel Sesuai Kebutuhan Keluarga</h3>
            {/* <h4 className="mt-10 text-white opacity-70 text-xl">100</h4> */}
          </div>
          <div className="container lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">Fokus pada Pengembangan Karakter dan Kepercayaan Diri</h3>
            {/* <h4 className="mt-10 text-white opacity-70 text-xl">100</h4> */}
          </div>
        </div>
      </Fade>
        
      <div className="max-w-7xl mx-auto lg:px-9 md:px-4">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-50 w-full object-cover sm:h-26 md:h-76 lg:w-70 lg:h-70"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-left flex flex-col justify-center">
            <h2 className="text- text-3xl font-semibold ">🌈 Simply Plus Education</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-2xl text-gradient bg-gradient-to-r from-pink to-purple">
              Les Privat ke Rumah, Belajar Jadi Lebih Mudah dan Menyenangkan!
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0 text-justify">
              Simply Plus Education membantu setiap anak belajar dengan cara terbaik mereka.

              Melalui layanan les privat ke rumah, kami menghadirkan pengalaman belajar yang personal, fleksibel, dan berkualitas tinggi untuk siswa PAUD, TK, SD, dan SMP.

              Guru profesional kami tidak hanya mengajar, tapi juga membimbing dan memotivasi — agar anak tumbuh percaya diri, mandiri, dan berprestasi.

              🎯 Belajar bukan sekadar memahami pelajaran, tapi juga membangun masa depan.

              🌈 Simply Plus Education – Smart Learning Starts at Home.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                {/* <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Call Us Now
                </a> */}
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  View Gallery
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="container w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-2xl">
              📚 Program Kami:
            </span>
            <div className="container mt-5 text-justify">
              <div>
                <p className="text-black text-left text-2xl">💡Les semua mata pelajaran PAUD,TK,SD,SMP</p>
                
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">💡Calistung & penguatan konsep dasar</p>
                
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">💡Bahasa Inggris & Matematika kreatif</p>
              
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">💡Persiapan ujian sekolah</p>
              
              </div>
            </div>
          </div>

          <div className="container w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-2xl">
              🌈 Simply Plus Education 
              
            </h2>
            <h2 className="text-white">Les Privat ke Rumah – Belajar Nyaman, Prestasi Gemilang!</h2>
            <p className="mt-10 text-white opacity-85">
              Di Simply Plus Education, kami percaya bahwa setiap anak memiliki potensi luar biasa yang bisa berkembang dengan bimbingan yang tepat.
              Kami menghadirkan layanan les privat ke rumah untuk jenjang PAUD, TK, SD, hingga SMP, dengan metode belajar yang interaktif, menyenangkan, 
              dan disesuaikan dengan kebutuhan setiap siswa.
              Dengan guru berpengalaman dan pendekatan pembelajaran personal, kami membantu anak belajar dengan lebih fokus, percaya diri, dan berprestasi.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          💡 Mengapa memilih Simply Plus Education?
        </h2>
        {/* <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
        
        </h3> */}
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg text-justify">
          Karena kami percaya bahwa setiap anak unik, dan mereka berhak mendapatkan pendampingan belajar yang sesuai dengan cara mereka tumbuh dan memahami dunia.
          Simply Plus Education tidak hanya menghadirkan les privat ke rumah, tetapi juga menciptakan pengalaman belajar yang menyenangkan, bermakna, dan penuh semangat.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          Belajar Nyaman di Rumah, Hasil Maksimal Bersama Simply Plus Education!
        </h2>
        {/* <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Discover and connect
        </h3> */}
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Setiap anak adalah bintang yang bersinar dengan caranya sendiri ✨
          Di Simply Plus Education, kami percaya bahwa potensi anak akan tumbuh maksimal jika ia belajar dengan cara yang tepat — di tempat yang membuatnya nyaman, bersama guru yang memahami kebutuhannya.Karena kami percaya, rumah bukan hanya tempat istirahat — tapi juga tempat terbaik untuk tumbuh dan belajar dengan bahagia.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Hubungi Kami Sekarang
            </a>
            
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
          
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="container w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Menulis</h3>
           
          </div>

          <div className="container w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Membaca</h3>
           
          </div>
          <div className="container w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Mewarnai</h3>
          </div>
        </div>
      </Fade>


      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image4}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image5}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image6}></img>
          </div>
          
        </div>
      </Fade>
      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
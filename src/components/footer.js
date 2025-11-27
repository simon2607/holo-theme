import { Link } from "gatsby"
import React from "react"
import { Instagram, Music2 } from "lucide-react"

import logo from "../images/1.png"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="Holo" />

              <p className="text-black opacity-70 text-sm mt-5 ">
                Mewujudkan generasi cerdas, percaya diri, dan siap menghadapi masa depan.
                Bersama kami, setiap langkah belajar menjadi lebih bermakna.
              </p>

              {/* Ikon Sosial Media */}
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.instagram.com/simplypluseducation?igsh=MWR0eTRiMHF6YTgyeg%3D%3D&utm_source=qr" 
                target="_blank"
                aria-label="Instagram"
                title="Instagram">
                  <Instagram className="w-6 h-6 text-black hover:text-white transition" />
                   
                </a>

                {/* <a href="https://tiktok.com" target="_blank">
                  <Music2 className="w-6 h-6 text-black hover:text-white transition" />
                </a> */}
              </div>

              <p className="text-white text-lg font-bold mt-20">
                <span className="text-black font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. Simon Kasih H.
                </span>
              </p>

              <div className="text-black font-bold block-inline">
                <p>
                  <a className="text-black font-bold block-inline" href="/">
                    Holo
                  </a>
                  <a
                    className="text-black font-semibold ml-1"
                    target="_blank"
                    href="https://travislord.xyz"
                  >
                    By TL
                  </a>
                  <a
                    href="https://github.com/lilxyzz/holo-theme"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/Github-Logo.png"
                      alt="GitHub"
                    />
                  </a>
                </p>
              </div>
            </div>

            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="text-xl font-montserrat font-medium">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
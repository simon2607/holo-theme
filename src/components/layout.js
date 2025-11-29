/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import WhatsAppFloatWithPopup from "./WhatsAppFloatWithPopup";
import Seo from "../components/seo"





const Layout = ({ children }) => {

  return (
    <div>
       <Seo title="Home" />
      {children}
      <Navbar></Navbar>
       
      <Footer></Footer>
       <>
      <WhatsAppFloatWithPopup phone="+6281314565926" />
    </>
    </div>
  )
}

export default Layout

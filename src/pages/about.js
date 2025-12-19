import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
     <Seo
        title="About Us"
        description="Tentang Simply Plus Education. Layanan les privat datang ke rumah untuk TK, SD, SMP, SMA dengan tutor profesional. Komitmen kami: pendidikan berkualitas dan menyenangkan."
        pathname="/about"
        keywords="tentang Simply Plus Education, les privat, tutor privat, pendidikan anak, datang ke rumah"
      />


      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About

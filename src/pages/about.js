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
        title="Simply Plus Education - About"
        description="Di Simply Plus Education, kami percaya bahwa setiap anak memiliki cara belajar yang unik. Karena itu, kami menghadirkan layanan les privat di rumah yang disesuaikan dengan kebutuhan, karakter, dan gaya belajar masing-masing siswa."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About

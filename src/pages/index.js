import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
     <Seo
  title="Home"
  description="Simply Plus Education - Les privat datang ke rumah untuk TK, SD, SMP, SMA. Tutor profesional membimbing anak Anda dengan metode belajar menyenangkan."
  pathname="/"
  keywords="les privat, les privat TK, les privat SD, les privat SMP, les privat SMA, pendidikan anak, tutor datang ke rumah"
/>


      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage

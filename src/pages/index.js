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
        title="Simply Plus Education Tangerang"
        description="Setiap anak adalah bintang yang bersinar dengan caranya sendiri ✨ Di Simply Plus Education, kami percaya bahwa potensi anak akan tumbuh maksimal jika ia belajar dengan cara yang tepat — di tempat yang membuatnya nyaman, bersama guru yang memahami kebutuhannya."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage

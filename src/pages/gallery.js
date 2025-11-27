import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Simply Plus Education - Gallery"
        description="Belajar nyaman di Simply Plus Education, fokus, dan personal dari rumah sendiri. Dengan bimbingan tutor 1-on-1, setiap siswa dibantu memahami materi lebih mudah, lebih percaya diri, dan siap meraih prestasi terbaik."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage

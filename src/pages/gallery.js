import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
       <Seo
        title="Gallery"
        description="Galeri kegiatan dan les privat Simply Plus Education."
        pathname="/gallery"
      />

      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage

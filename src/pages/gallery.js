import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Gallery"
        description="Galeri kegiatan Simply Plus Education. Lihat kegiatan les privat datang ke rumah untuk TK, SD, SMP, SMA dan metode belajar anak-anak."
        pathname="/gallery"
        keywords="galeri Simply Plus Education, les privat, kegiatan belajar, TK, SD, SMP, SMA"
      />

      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage

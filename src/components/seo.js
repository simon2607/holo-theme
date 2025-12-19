import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description, lang, pathname, keywords, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            defaultKeywords
            defaultImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.siteUrl
  const canonicalUrl = pathname ? `${siteUrl}${pathname}` : siteUrl
  const metaKeywords = keywords || site.siteMetadata.defaultKeywords
  const metaImage = image || site.siteMetadata.defaultImage

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: "id",
  description:
    "Simply Plus Education - Les privat datang ke rumah untuk TK, SD, SMP, SMA. Belajar mudah dan menyenangkan di rumah.",
  pathname: "",
  keywords: "",
  image: "",
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  pathname: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
}

export default Seo

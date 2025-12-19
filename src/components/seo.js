import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, lang, meta, pathname }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const siteTitle = site.siteMetadata?.title || "Simply Plus Education";
  const siteDescription =
    description || site.siteMetadata?.description || "Les privat datang ke rumah untuk TK, SD, SMP, SMA.";
  const url = `${site.siteMetadata.siteUrl}${pathname || "/"}`;

  // JSON-LD Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteTitle,
    description: siteDescription,
    url: site.siteMetadata.siteUrl,
    logo: `${site.siteMetadata.siteUrl}/logosimplypluseducation.webp`,
    sameAs: [
      "https://www.facebook.com/SimplyPlusEducation",
      "https://www.instagram.com/simplypluseducation"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-9332-6311",
      contactType: "customer service",
      areaServed: "ID"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Karang Raya No. 4",
      addressLocality: "Jakarta",
      postalCode: "15138",
      addressCountry: "ID"
    }
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title ? `%s | ${siteTitle}` : siteTitle}
      meta={[
        { name: "description", content: siteDescription },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title || siteTitle },
        { property: "og:description", content: siteDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title || siteTitle },
        { name: "twitter:description", content: siteDescription },
        { name: "twitter:creator", content: site.siteMetadata?.author || "" },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: "id",
  meta: [],
  description: "",
  pathname: "/",
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
};

export default Seo;

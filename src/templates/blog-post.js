import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"   // NEW: tambahkan Link
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LeftIcon from "../images/left-icon.svg"
import RightIcon from "../images/right-icon.svg"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const StyledDiv = styled.div`
  & h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.2;
  }
  & h3 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2;
  }
  & h4 {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 2;
  }
  & a {
    color: #6b46c1;
  }
`

const BlogPost = props => {
  const { pageContext } = props
  const post = props.data.markdownRemark
  const tags = post.frontmatter.tags || []   // NEW

  const nextSlug = pageContext.next ? pageContext.next.fields.slug : "/"
  const previousSlug = pageContext.previous
    ? pageContext.previous.fields.slug
    : "/"
  const nextLinkStatus = pageContext.next
    ? pageContext.next.frontmatter.templateKey === "blog-post"
      ? true
      : false
    : false
  const previousLinkStatus = pageContext.previous
    ? pageContext.previous.frontmatter.templateKey === "blog-post"
      ? true
      : false
    : false

  let date = new Date(post.frontmatter.date)
  let options = { year: "numeric", month: "short", day: "numeric" }
  let formattedDate = date.toLocaleDateString("en-US", options)
  let titlaDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  let isoDate = date.toISOString().split("T")[0]

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        defaultKeywords={post.siteMetadata.defaultKeywords}
      />
      <Helmet>
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
        <meta name="keywords" content={`${tags.join(", ")}`} /> {/* NEW */}
      </Helmet>

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#000000] lg:mb-6 lg:text-4xl dark:text-black">
                {post.frontmatter.title}
              </h1>
            </header>

            {post.frontmatter.featuredimage && (
              <div className="post-content-image">
                <GatsbyImage
                  image={getImage(post.frontmatter.featuredimage)}
                  className="lg:mb-2 overflow-hidden rounded-xl"
                  alt={post.frontmatter.title}
                />
              </div>
            )}

            <p className="text-base text-gray-500 dark:text-gray-400 lg:mb-2">
              <time dateTime={isoDate} title={titlaDate}>
                {formattedDate}
              </time>
            </p>

            {/* ------- TAGS SECTION ------ */}  {/* NEW */}
            {tags.length > 0 && (
              <div className="mb-6">
                <strong className="mr-2">Tags:</strong>
                {tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/tags/${tag.toLowerCase().replace(/ /g, "-")}/`}
                    className="px-2 py-1 bg-gray-200 rounded-md text-sm mr-2 hover:bg-gray-300"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
            {/* -------------------------- */}

            <StyledDiv
              className="post-content-body text-[#000000]"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* NAV NEXT / PREVIOUS */}
            <div className="flex items-center justify-between pt-8">
              <div>
                <a
                  style={{
                    display: previousLinkStatus ? "flex" : "none",
                    alignItems: "center",
                    color: "#131313",
                  }}
                  className="text-base	"
                  href={previousSlug}
                >
                  <img src={LeftIcon} alt="LeftIcon" width={30} height={30} />
                  <span>
                    {pageContext.previous
                      ? pageContext.previous.frontmatter.title?.length > 30
                        ? pageContext.previous.frontmatter.title.slice(0, 30) +
                          "..."
                        : pageContext.previous.frontmatter.title
                      : ""}
                  </span>
                </a>
              </div>

              <div>
                <a
                  style={{
                    display: nextLinkStatus ? "flex" : "none",
                    alignItems: "center",
                    color: "#131313",
                  }}
                  className="text-base	"
                  href={nextSlug}
                >
                  <span>
                    {pageContext.next
                      ? pageContext?.next?.frontmatter?.title?.length > 30
                        ? pageContext?.next?.frontmatter?.title?.slice(0, 30) +
                          "..."
                        : pageContext?.next?.frontmatter?.title
                      : ""}
                  </span>
                  <img src={RightIcon} alt="RightIcon" width={30} height={30} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description     
        tags           
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

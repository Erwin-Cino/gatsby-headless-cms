import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BlogLink from "../components/BlogLink"
import SEO from "../components/seo"
import description from "../components/Description"

export default ({ data }) => {
  const featured = data.allWordpressPost.edges.map(
    ({ node }) => node.featured_media
  )
  console.log(featured)
  return (
    <Layout>
      <SEO title={description.title} />
      <h1>Headless CMS All The Way!</h1>
      <section className="home-flex">
        {data.allWordpressPost.edges.map(({ node }, i) => (
          <div className="home-flex-child" key={i}>
            <Link to={node.slug}>
              <p className="post-title">{node.title}</p>
            </Link>
          </div>
        ))}
      </section>
      <BlogLink />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 500, height: 262) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`

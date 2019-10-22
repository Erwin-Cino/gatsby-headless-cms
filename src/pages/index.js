import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {
  // const resolutions =
  //   data.allWordpressPost.edges.node.featured_media.localFile.childImageSharp
  //     .resolutions
  // console.log(resolutions)
  return (
    <Layout>
      <SEO title="home" />
      <h1>Headless CMS All The Way!</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <p>{node.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

/*
<img src={node.featured_media.localFile.childImageSharp.fluid.src} />
<Img
key={node.featured_media.localFile.childImageSharp.fluid.src}
alt={data.WordpressPost.title}
sizes={node.featured_media.localFile.childImageSharp.fluid}
/> */

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
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
console.log(pageQuery)

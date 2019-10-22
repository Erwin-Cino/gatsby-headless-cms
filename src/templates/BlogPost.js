import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  const resolutions =
    data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp
      .resolutions
  return (
    <Layout>
      <div>
        <Img className="featured-blog-image" resolutions={resolutions} />
        <h1 className="title-post">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 800, height: 400) {
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

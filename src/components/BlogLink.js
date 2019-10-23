import React from "react"
import { graphql } from "gatsby"
import description from "../components/Description"

const Post = () => {
  return (
    <div>
      <p>
        I used my WP blog as a backend for this &rarr;&nbsp;
        <a href={description.link}>Learn More</a>
      </p>
    </div>
  )
}

export const postQuery = graphql`
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
export default Post

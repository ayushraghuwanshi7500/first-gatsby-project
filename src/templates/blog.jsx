import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            <img
              src={node.data.target.fixed.src}
              alt={node.data.target.title}
            />
          </>
        )
      },
    },
  }
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog

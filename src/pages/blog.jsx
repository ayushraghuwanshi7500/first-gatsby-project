import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>Blogs</h1>
      <h4>Blogs will appear here</h4>
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li>
              <h2> {post.node.frontmatter.title} </h2>
              <p>{post.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, eum.{" "}
      </p>
    </Layout>
  )
}

export default Blog

import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import { posts, postcss } from "./blog.module.scss"
import Head from "../components/Head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true, formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blogs</h1>
      <h4>Blogs will appear here</h4>
      <ol className={posts}>
        {data.allContentfulBlogPost.edges.map(post => {
          return (
            <li className={postcss}>
              <Link to={`/blogs/${post.node.slug}`}>
                <h2> {post.node.title} </h2>

                <p>{post.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog

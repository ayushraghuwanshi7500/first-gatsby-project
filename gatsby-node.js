const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.jsx")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.map(edge => {
    createPage({
      component: blogTemplate,
      path: `/blogs/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

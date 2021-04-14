import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const index = () => {
  return (
    <Layout>
      <h1>First Gatsby Project</h1>
      <p>
        Need a developer? <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default index

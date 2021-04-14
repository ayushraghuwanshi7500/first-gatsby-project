import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const about = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h4>I am Ayush Raghuwanshi</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        nostrum perferendis magni pariatur rerum iusto.
      </p>
      <Link to="/contact"> Contact me</Link>
    </Layout>
  )
}

export default about

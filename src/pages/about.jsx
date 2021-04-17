import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const about = () => {
  return (
    <Layout>
      <Head title="About" />
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

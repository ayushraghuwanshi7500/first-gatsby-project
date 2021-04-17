import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h4>ayushraghuwanshi7500@gmail.com</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, saepe.
      </p>
      <Link to="https://www.gatsbyjs.com/"> Gatsby Documentation </Link>
    </Layout>
  )
}

export default contact

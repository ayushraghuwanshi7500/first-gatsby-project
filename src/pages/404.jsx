import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { headHome } from "./404.module.scss"
import Head from "../components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Error 404 Not Found! </h1>
      <p style={{ textAlign: "center" }} className={headHome}>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

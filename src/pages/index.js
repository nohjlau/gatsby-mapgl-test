import React from "react"
import { Link } from "gatsby"
import Map from "../components/map"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Map />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

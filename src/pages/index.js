import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/lower-main"

const IndexPage = (props) => (
  <Layout>
    <Nav pathExt={props.path}/>
    <Banner />
    <MidBook />
    <Author />
  </Layout>
)

export default IndexPage

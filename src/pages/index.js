import React from "react"
import { Link } from 'gatsby'

import Footer from '../components/footer'


const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I'm Sara, and this is my repo where I'm going through a course on GatsbyJS</h2>
      <p><a href="/contact">Here's</a> a link to the contact page</p>
      <p>Here's another way to link with the link component</p>
      <Link to="/contact">Contact me.</Link>
      <Footer />
    </div>
  )
}

export default IndexPage;

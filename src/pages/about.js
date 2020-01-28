import React from 'react'
import { Link } from 'gatsby'

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm making this as part of a YouTube video on GatsbyJS. Pretend this is my personal site.</p>
      <p>You can find my contact information <Link to="/contact">here</Link></p>
    </div>
  )
}

export default About;
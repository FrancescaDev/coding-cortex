import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
    <Head title="About" />
      <h1>About Me</h1>
      <p>I am a freelance web & mobile app developer. I specialize in creating high-performance websites and mobile applications for businesses or personal projects</p>
      <p>I offer different 'tier-packages', depending on your business model & needs. I pride myself on my business ethics and strive to go above and beyond to provide my clients with beautiful, highly performant, secure & scalable websites and applications.</p>
      <p><Link to="/contact">Need a developer? Contact me.</Link></p>
    </Layout>
  )
}

export default AboutPage
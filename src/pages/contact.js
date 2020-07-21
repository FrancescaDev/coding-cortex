import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
  return (
    <Layout>
    <Head title="Contact"/>
      <h1>Contact Me</h1>
      <p>
      You can find me via <a href="https://github.com/francescadev" target="_blank" rel="noreferrer">GitHub</a><br />
      <br />email:<br />
      francesca-dev@codingcortex.com <br />
      <br />social media links:<br />
      Facebook Page: Coding Cortex<br />
      LinkedIn: <a href="https://linkedin.com/in/francescanor" target="_blank" rel="noreferrer">FrancescaNor</a>
      <br />tel.#:<br />xxx-xxx-xxxx
      </p>
    </Layout>
     
  )
}

export default ContactPage
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home"/>
    <h1>Welcome</h1>
    <h2>My name is Francesca and I am a fullstack developer living in Los Angeles, California.</h2> 
    </Layout>
  )
}

export default IndexPage
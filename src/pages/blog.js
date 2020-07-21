import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'


// Goal: Link to blog posts
// Make sure you import any ness. libraries/dependencies!!!
// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work!

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC} ) {
        edges {
          node {
             title
             slug
             publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `) 


  return (
    <Layout>
    <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

// ===========
// Goal: Create an about page and a contact page
// 
// 1. Create an about page. Include a page title and bio.
// 2. Create a contact page. Include a page title and contact details.
// 3. Test your work!

//MD Playground 2:12:15
// ============ 
// Goal: Show list of posts on blog page
//
// 1. Query the title and date for each post in blog component
// 2. Render an ol on the page
// 3. Render an li with nested h2 (title) and p (date) for each post - "render array of objects react"
// 4. Test your work!
//****hint*** always make sure to import any needed dependencies/libraries */
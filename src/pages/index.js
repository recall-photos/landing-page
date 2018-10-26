import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

const IndexPage = () => (
  <Layout>
	<h1>Home</h1>
	<p>Welcome</p>
	<Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Photos from '../components/photos'

class IndexPage extends React.Component {
	render() {
    	return (
			<Layout>
				<Photos data={this.props.data.allFile}/>
				<h1>All your photos safely under your control</h1>
				<p>
					An decentralized platform to safely store your photos. Sign up to
					get early access.
				</p>
			</Layout>
    	);
  	}
}

export default IndexPage

export const fluidImage = graphql`
	fragment fluidImage on File {
	  childImageSharp {
	  	id
	    fluid(maxWidth: 1000) {
	      ...GatsbyImageSharpFluid_tracedSVG
	    }
	  }
	}
`;

export const pageQuery = graphql`
	query ImageQuery {
		allFile(filter: {extension: {regex: "/(jpeg)/"}}) {
	    edges {
	      node {
	        ...fluidImage
	      }
	    }
	  }
	}
`

// export const pageQuery = graphql`
// query ImageQuery {
//     imageOne: file(relativePath: { eq: "desert.jpeg" }) {
//       ...fluidImage
//     }
//     imageTwo: file(relativePath: { eq: "orange-bike.jpeg" }) {
//       ...fluidImage
//     }
//     imageThree: file(relativePath: { eq: "pod-hotel.jpeg" }) {
//       ...fluidImage
//     }
//   }
// `
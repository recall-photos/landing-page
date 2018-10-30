import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
// import Photos from '../components/photos'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const IndexPage = props => (
	<Layout>
		<PhotosMainContainer>
			<PhotoContainer>
				<Photo>
					<Photo2>
						<div style={{ position: 'relative' }}>
							<Img
								fluid={
									props.data.imageOne.childImageSharp.fluid
								}
								css={{
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
								}}
							/>
						</div>
					</Photo2>
				</Photo>
			</PhotoContainer>
		</PhotosMainContainer>
		<h1>All your photos safely under your control</h1>
		<p>
			An decentralized platform to safely store your photos. Sign up to
			get early access.
		</p>
	</Layout>
)

const PhotosMainContainer = styled.main.attrs({
	className: 'cf w-100',
})``

const PhotoContainer = styled.main.attrs({
	className: 'fl w-50 w-third-m w-25-ns',
})``

const Photo = styled.main.attrs({
	className: 'aspect-ratio aspect-ratio--4x6',
})``

const Photo2 = styled.main.attrs({
	className: 'bg-center cover aspect-ratio--object',
})``

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "desert.jpeg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "orange-bike.jpeg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "pod-hotel.jpeg" }) {
      ...fluidImage
    }
  }
`

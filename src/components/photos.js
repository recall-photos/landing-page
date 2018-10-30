import React from 'react'
import Img from 'gatsby-image'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const Photos = props => (
	<PhotosMainContainer>
		{data.allImages.edges.map(({ node }) => (
			<PhotoContainer>
				<Photo>
					<Photo2>
						<div style={{ position: 'relative' }}>
							<Img
								key={node.id}
								fluid={node.childImageSharp.fluid}
								alt={node.name}
								css={{ top: 0, left: 0, right: 0, bottom: 0 }}
							/>
						</div>
					</Photo2>
				</Photo>
			</PhotoContainer>
		))}
	</PhotosMainContainer>
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

export default Photos

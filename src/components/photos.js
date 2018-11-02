import React from 'react'
import Img from 'gatsby-image'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const Photos = props => (
	<Main>
		{props.data.edges.map(({ node }) => (
			<Container>
				<Outside>
					<Photo style={{ position: 'relative' }}>
							<Img
								key={node.id}
								fluid={node.childImageSharp.fluid}
							/>
					</Photo>
				</Outside>
			</Container>
		))}
	</Main>
)

const Main = styled.main.attrs({
	className: 'cf fr-ns w-100 w-50-ns',
})``

const Container = styled.main.attrs({
	className: 'fl w-50 w-third-m w-25-ns',
})``

const Outside = styled.main.attrs({
	className: 'aspect-ratio aspect-ratio--3x4',
})``

const Photo = styled.main.attrs({
	className: 'bg-center cover aspect-ratio--object',
})``

export default Photos

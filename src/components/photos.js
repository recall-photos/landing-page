import React from 'react'
import Img from 'gatsby-image'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const Photos = props => (
  <div>
    {props.data.edges.map(({ node }) => (
        <Container>
            <Outside>
                <Photo>
                  <Img
                      key={node.id}
                      fluid={node.childImageSharp.fluid}
                  />
                </Photo>
            </Outside>
        </Container>
    ))}
  </div>
)

const Container = styled.main.attrs({
  className: 'fl w-50 w-third-m w-25-ns',
})``

const Outside = styled.main.attrs({
  className: 'aspect-ratio aspect-ratio--3x4',
})``

const Photo = styled.main.attrs({
  className: 'relative bg-center cover aspect-ratio--object',
})``

export default Photos

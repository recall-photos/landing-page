import React from 'react'
import { graphql } from 'gatsby'
import Sticky from 'react-stickynode'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Photos from '../components/photos'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeaderWrapper>
          <Nav />
          <InnerWrapper>
            <PhotosWrapper>
              <Photos data={this.props.data.allFile} />
            </PhotosWrapper>
            <TextWrapper>
              <Header>No more doubts about who owns the photos.</Header>
              <Description>
                An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.
              </Description>
              <Button>Sign in with</Button>
            </TextWrapper>
          </InnerWrapper>
        </HeaderWrapper>
        <Section>
        </Section>
      </Layout>
    )
  }
}

const HeaderWrapper = styled.main.attrs({
  className: 'relative dt bg-washed-red w-100',
})``

const InnerWrapper = styled.main.attrs({
  className: '',
})``

const PhotosWrapper = styled.main.attrs({
  className: 'fl w-100 w-50-ns',
})``

const TextWrapper = styled.main.attrs({
  className: 'fr dtc w-100 w-50-ns pa5',
})``

const Header = styled.main.attrs({
  className: 'f2',
})``

const Description = styled.main.attrs({
  className: 'mt2 f4 lh-copy',
})``

const Button = styled.h2.attrs({
  className:
    'f6 mt4 dib black bg-animate hover-bg-black hover-black no-underline pv2 ph4 br-pill ba b--black-20',
})``

const Section = styled.main.attrs({
  className: '',
})``

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      id
      fluid(maxWidth: 300, maxHeight: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query ImageQuery {
    allFile(filter: { extension: { regex: "/(jpeg)/" } }) {
      edges {
        node {
          ...fluidImage
        }
      }
    }
  }
`

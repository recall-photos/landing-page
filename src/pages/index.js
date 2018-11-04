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
        <HeaderSection>
          <Nav />
          <HeaderWrapper>
            <PhotosWrapper>
              <Photos data={this.props.data.allFile} />
            </PhotosWrapper>
            <HeaderTextWrapper>
              <HeaderTitle>No more doubts about who owns the photos.</HeaderTitle>
              <HeaderDescription>
                An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.
              </HeaderDescription>
              <Button>Sign in with</Button>
            </HeaderTextWrapper>
          </HeaderWrapper>
        </HeaderSection>
        <BenefitsSection>
          <BenefitsWrapper>
            <BenefitsRow>
              <BenefitBox>
                <Title>Benefit 1</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
              <BenefitBox>
                <Title>Benefit 2</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
            </BenefitsRow>
            <BenefitsRow>
              <BenefitBox>
                <Title>Benefit 3</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
              <BenefitBox>
                <Title>Benefit 4</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
            </BenefitsRow>
          </BenefitsWrapper>
        </BenefitsSection>
        <OSSSection>
          <OSSWrapper>
            <Title>Open Source</Title>
            <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
          </OSSWrapper>
        </OSSSection>
        <ContactsSection>
          <ContactsWrapper>
            <Title>Open Source</Title>
            <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
          </ContactsWrapper>
        </ContactsSection>
      </Layout>
    )
  }
}

// Header Section

const HeaderSection = styled.main.attrs({
  className: 'dt bg-washed-red w-100',
})``

const HeaderWrapper = styled.main.attrs({
  className: 'flex',
})``

const PhotosWrapper = styled.main.attrs({
  className: 'dtc w-100 w-50-ns',
})``

const HeaderTextWrapper = styled.main.attrs({
  className: 'dtc self-center w-100 w-50-ns pa5',
})``

const HeaderTitle = styled.main.attrs({
  className: 'f2',
})``

const HeaderDescription = styled.main.attrs({
  className: 'mt2 f4 lh-copy',
})``

// Benefits Section

const BenefitsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const BenefitsWrapper = styled.main.attrs({
  className: 'flex justify-center items-center ph2 pv6',
})``

const BenefitsRow = styled.main.attrs({
  className: 'flex-column ph5',
})``

const BenefitBox = styled.main.attrs({
  className: 'pa4',
})``

// Open Source Section

const OSSSection = styled.main.attrs({
  className: 'dt w-100',
})``

const OSSWrapper = styled.main.attrs({
  className: 'dt bg-washed-red w-100 ph6 pv6',
})``

// Contacts Section

const ContactsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const ContactsWrapper = styled.main.attrs({
  className: 'dt w-100 ph6 pv6',
})``

// Shared Elements

const Title = styled.main.attrs({
  className: 'f2',
})``

const Paragraph = styled.main.attrs({
  className: 'mt2 f5 lh-copy',
})``

const Button = styled.h2.attrs({
  className:
    'f6 mt4 dib black bg-animate hover-bg-black hover-black no-underline pv2 ph4 br-pill ba b--black-20',
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

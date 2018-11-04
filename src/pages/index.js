import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Sticky from 'react-stickynode'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

import Collection from '../svgs/collection.svg'
import Security from '../svgs/security.svg'
import Server from '../svgs/server.svg'
import Sharing from '../svgs/sharing.svg'

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
            <HeaderTextWrapper>
              <HeaderTitle>No more doubts about who owns the photos.</HeaderTitle>
              <HeaderDescription>
                An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.
              </HeaderDescription>
              <Button>Sign in with</Button>
            </HeaderTextWrapper>
              <PhotosWrapper>
              <Photos data={this.props.data.allFile} />
            </PhotosWrapper>
          </HeaderWrapper>
        </HeaderSection>
        <BenefitsSection>
          <BenefitsWrapper>
            <BenefitsRow>
              <BenefitBox>
                <Security />
                <Title>Ownership</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
              <BenefitBox>
                <Sharing />
                <Title>Easy to Use</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
            </BenefitsRow>
            <BenefitsRow>
              <BenefitBox>
                <Server />
                <Title>Descentralised</Title>
                <Paragraph>An alternative way to safely store your photos online, so you are always in control. Sign up to get early access.</Paragraph>
              </BenefitBox>
              <BenefitBox>
                <Collection />
                <Title>Searchable</Title>
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
            <Title>Stay up to date.</Title>
            <Paragraph>Get notified about recall news, updates and be the first to get early acess to a safer way to store photos online.</Paragraph>
          </ContactsWrapper>
        </ContactsSection>
      </Layout>
    )
  }
}

// Header Section

const HeaderSection = styled.main.attrs({
  className: 'dt bg-purple w-100',
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
  className: 'f2 white helvetica',
})``

const HeaderDescription = styled.main.attrs({
  className: 'mt2 f4 white lh-copy helvetica',
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
  className: 'pa4 pv5',
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
  className: 'f2 mt5 tc helvetica',
})``

const Paragraph = styled.main.attrs({
  className: 'mt2 f5 tc lh-copy helvetica',
})``

const Button = styled.h2.attrs({
  className:
    'f6 mt4 dib white bg-animate hover-bg-white hover-purple no-underline pv2 ph4 br-pill ba b--white-20 helvetica',
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

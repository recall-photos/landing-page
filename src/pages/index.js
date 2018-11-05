import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Sticky from 'react-stickynode'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

import Collection from '../svgs/collection.svg'
import Collaboration from '../svgs/collaboration.svg'
import Github from '../svgs/github.svg'
import Newsletter from '../svgs/newsletter.svg'
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
              <HeaderTitle>
                No more doubts about who owns the photos.
              </HeaderTitle>
              <HeaderDescription>
                An alternative way to safely store your photos online, so you
                are always in control. Sign up to get early access.
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
              <BenefitsBox>
                <BenefitsSvg>
                  <Security />
                </BenefitsSvg>
                <BenefitsTitle>Ownership</BenefitsTitle>
                <BenefitsParagraph>
                  An alternative way to safely store your photos online, so you
                  are always in control. Sign up to get early access.
                </BenefitsParagraph>
              </BenefitsBox>
              <BenefitsBox>
                <BenefitsSvg>
                  <Sharing />
                </BenefitsSvg>
                <BenefitsTitle>Easy to Use</BenefitsTitle>
                <BenefitsParagraph>
                  An alternative way to safely store your photos online, so you
                  are always in control. Sign up to get early access.
                </BenefitsParagraph>
              </BenefitsBox>
            </BenefitsRow>
            <BenefitsRow>
              <BenefitsBox>
                <BenefitsSvg>
                  <Server />
                </BenefitsSvg>
                <BenefitsTitle>Descentralised</BenefitsTitle>
                <BenefitsParagraph>
                  An alternative way to safely store your photos online, so you
                  are always in control. Sign up to get early access.
                </BenefitsParagraph>
              </BenefitsBox>
              <BenefitsBox>
                <BenefitsSvg>
                  <Collection />
                </BenefitsSvg>
                <BenefitsTitle>Searchable</BenefitsTitle>
                <BenefitsParagraph>
                  An alternative way to safely store your photos online, so you
                  are always in control. Sign up to get early access.
                </BenefitsParagraph>
              </BenefitsBox>
            </BenefitsRow>
          </BenefitsWrapper>
        </BenefitsSection>
        <OSSSection>
          <OSSWrapper>
            <OSSSvg>
              <Github />
            </OSSSvg>
            <OSSTextWrapper>
              <OSSTitle>Open Source</OSSTitle>
              <OSSParagraph>
                Help us create the best solution to safely store your photos online.
              </OSSParagraph>
            </OSSTextWrapper>
            <OSSButton>Contribute to Recall on Github</OSSButton>
          </OSSWrapper>
        </OSSSection>
        <ContactsSection>
          <ContactsWrapper>
            <ContactsSvg>
              <Newsletter />
            </ContactsSvg>
            <ContactsTextWrapper>
              <ContactsTitle>Stay up to date.</ContactsTitle>
              <ContactsParagraph>
                Get notified about recall news, updates and be the first to get
                early acess to a safer way to store photos online.
              </ContactsParagraph>
            </ContactsTextWrapper>
          </ContactsWrapper>
        </ContactsSection>
      </Layout>
    )
  }
}

// Tachyons

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
  className: 'f2 white b helvetica',
})``

const HeaderDescription = styled.main.attrs({
  className: 'mt3 f4 white lh-copy helvetica',
})``

// Benefits Section

const BenefitsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const BenefitsWrapper = styled.main.attrs({
  className: 'flex items-end ph2 pv6',
})``

const BenefitsRow = styled.main.attrs({
  className: 'flex-column ph5',
})``

const BenefitsBox = styled.main.attrs({
  className: 'pa4 pv5',
})``

const BenefitsTitle = styled.main.attrs({
  className: 'f2 mt5 tc b helvetica',
})``

const BenefitsParagraph = styled.main.attrs({
  className: 'f5 mt3 mw6 tc lh-copy helvetica',
})``

const BenefitsSvg = styled.main.attrs({
  className: 'w-40 center',
})``

// Open Source Section

const OSSSection = styled.main.attrs({
  className: 'dt w-100',
})``

const OSSWrapper = styled.main.attrs({
  className:
    'flex-column justify-center items-center bg-near-white w-100 ph6 pv6',
})``

const OSSTextWrapper = styled.main.attrs({
  className: 'flex-column justify-center',
})``

const OSSTitle = styled.main.attrs({
  className: 'mt4 f2 tc b helvetica',
})``

const OSSParagraph = styled.main.attrs({
  className: 'f5 mt3 tc lh-copy helvetica',
})``

const OSSButton = styled.main.attrs({
  className: 'f6 mt4 dib white bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--purple bg-purple helvetica',
})``

const OSSSvg = styled.main.attrs({
  className: 'w-20 center',
})``

// Contacts Section

const ContactsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const ContactsWrapper = styled.main.attrs({
  className: 'flex justify-center items-center ph2 pv6',
})``

const ContactsTextWrapper = styled.main.attrs({
  className: 'dtc self-center pl6 mw7',
})``

const ContactsTitle = styled.main.attrs({
  className: 'f2 tl b helvetica',
})``

const ContactsParagraph = styled.main.attrs({
  className: 'f5 mt3 tl lh-copy helvetica',
})``

const ContactsSvg = styled.main.attrs({
  className: 'w-10',
})``

// Shared Elements

const Button = styled.main.attrs({
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

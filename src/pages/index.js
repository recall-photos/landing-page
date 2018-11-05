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
import Footer from '../components/footer'
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
                Help us create the best solution to safely store your photos
                online.
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
              <ContactsForm>
                <form action="" method="POST" accept-charset="UTF-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <ContactsButton type="submit" children="Send">Send</ContactsButton>
                </form>
              </ContactsForm>
            </ContactsTextWrapper>
          </ContactsWrapper>
        </ContactsSection>
        <Footer />
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
  className: 'flex pb3 pb0-ns',
})``

const PhotosWrapper = styled.main.attrs({
  className: 'dtc w-0 w-70-m w-50-l',
})``

const HeaderTextWrapper = styled.main.attrs({
  className: 'dtc self-center w-100 w-70-m w-50-l pa4 pt6 pt6-ns pa5-ns',
})``

const HeaderTitle = styled.main.attrs({
  className: 'f4 f3-ns mw7 white b helvetica',
})``

const HeaderDescription = styled.main.attrs({
  className: 'f4 f4-ns mt3 mw7 white lh-copy helvetica',
})``

// Benefits Section

const BenefitsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const BenefitsWrapper = styled.main.attrs({
  className: 'flex flex-column flex-row-l items-center-m items-baseline-l justify-center ph2-ns pv4 pv6-ns',
})``

const BenefitsRow = styled.main.attrs({
  className: 'flex-column ph5-ns',
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
    'flex-column justify-center items-center bg-near-white w-100 ph4 ph6-ns pv6',
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
  className:
    'f6 mt4 dib white bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--purple bg-purple helvetica',
})``

const OSSSvg = styled.main.attrs({
  className: 'w-20 center',
})``

// Contacts Section

const ContactsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const ContactsWrapper = styled.main.attrs({
  className: 'flex-ns justify-around-ns items-center ph5-m ph6-l pv6',
})``

const ContactsTextWrapper = styled.main.attrs({
  className: 'dtc pl5-m mw6-m mw7-l ph5-l',
})``

const ContactsTitle = styled.main.attrs({
  className: 'f2 tc tl-ns b helvetica',
})``

const ContactsParagraph = styled.main.attrs({
  className: 'f5 mt3 tc tl-ns lh-copy helvetica',
})``

const ContactsSvg = styled.main.attrs({
  className: 'w-30 w-20-m w-20-l',
})``

const ContactsForm = styled.main.attrs({
  className: '',
})``

const ContactsButton = styled.main.attrs({
  className:
    '',
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

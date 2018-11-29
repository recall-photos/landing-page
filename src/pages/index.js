import React from 'react'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'
import Hide from 'hidden-styled'

import Collection from '../svgs/collection.svg'
import Github from '../svgs/github.svg'
import GithubRound from '../svgs/github-round.svg'
import Newsletter from '../svgs/newsletter.svg'
import Security from '../svgs/security.svg'
import Server from '../svgs/server.svg'
import Sharing from '../svgs/sharing.svg'
import TwitterRound from '../svgs/twitter-round.svg'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Form from '../components/form'
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
              <HeaderTitle>Recall every day of your life</HeaderTitle>
              <HeaderDescription>
                Safely store and access your photos using{' '}
                <a class="white dim courser underline" href="https://blockstack.org" target="_blank" rel="noopener noreferrer">Blockstack</a>. Your memories, your data.<Hide lg><br /></Hide> Sign up to get early access.
              </HeaderDescription>
              <OutboundLink href="https://app.recall.photos" target="_blank" rel="noopener noreferrer">
                <HeaderButton>
                  Start using the beta today!
                </HeaderButton>
              </OutboundLink>
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
                  A simple secure way to safely store your photos online, with
                  the added twist of you truly owning your photos.
                </BenefitsParagraph>
              </BenefitsBox>
              <BenefitsBox>
                <BenefitsSvg>
                  <Sharing />
                </BenefitsSvg>
                <BenefitsTitle>Easy to Use</BenefitsTitle>
                <BenefitsParagraph>
                  Automatically upload your photos to Recall and access them
                  from anywhere using intuitive web and mobile platforms.
                </BenefitsParagraph>
              </BenefitsBox>
            </BenefitsRow>
            <BenefitsRow>
              <BenefitsBox>
                <BenefitsSvg>
                  <Server />
                </BenefitsSvg>
                <BenefitsTitle>Your storage</BenefitsTitle>
                <BenefitsParagraph>
                  No one but you can access or view your photos. They are
                  automatically protected by the latest encryption mechanisms.
                </BenefitsParagraph>
              </BenefitsBox>
              <BenefitsBox>
                <BenefitsSvg>
                  <Collection />
                </BenefitsSvg>
                <BenefitsTitle>Searchable</BenefitsTitle>
                <BenefitsParagraph>
                  We'll sort out your photos so you can easily recall all your
                  memories and find the ones you're looking for.
                </BenefitsParagraph>
              </BenefitsBox>
            </BenefitsRow>
          </BenefitsWrapper>
        </BenefitsSection>
        <OSSSection>
          <OSSWrapper>
            <OSSTextWrapper>
              <OSSTitle>Open Source</OSSTitle>
              <OSSParagraph>
                Join us on a mission to create tools to safely store, organize
                and view photos online. Help us gain back true onwership of our
                memories.
              </OSSParagraph>
              <OSSParagraph>
                All our code is open-sourced and avaiable online for
                anyone to contribute.
              </OSSParagraph>
              <a href="https://github.com/recall-photos/recall-app" target="_blank" rel="noopener noreferrer">
                <OSSButton>Contribute to Recall on Github</OSSButton>
              </a>
            </OSSTextWrapper>
            <OSSSvg>
              <Github />
            </OSSSvg>
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
                Follow us for news, updates and to be the first to know when you
                can start safetly storing your photos online with Recall.
              </ContactsParagraph>
              <Form />
              <ContactsIcons>
              <a href="https://github.com/recall-photos" target="_blank" rel="noopener noreferrer">
                <TwitterRound class="mr3 dim pointer" />
              </a>
              <a href="https://github.com/recall-photos/recall-app" target="_blank" rel="noopener noreferrer">
                <GithubRound class="dim pointer" />
              </a>
              </ContactsIcons>
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
  className: 'dt bg-purple w-100 pv3 pv0-ns',
})``

const HeaderWrapper = styled.main.attrs({
  className: 'flex pb3 pb0-ns',
})``

const PhotosWrapper = styled.main.attrs({
  className: 'dtc w-0 w-70-m w-50-l',
})``

const HeaderTextWrapper = styled.main.attrs({
  className: 'dtc self-center w-100 w-70-m w-50-l pt6 pa4 pa5-ns',
})``

const HeaderTitle = styled.main.attrs({
  className: 'mb4 f4 f4-m f3-l mw7 white b helvetica',
})``

const HeaderDescription = styled.main.attrs({
  className: 'f6 f6-m f4-l mt3 mw7 mw6-l white lh-copy helvetica',
})``

const HeaderButton = styled.main.attrs({
  className:
    'f5 b mt4 dib white bg-animate hover-bg-white hover-dark-pink no-underline pv2 ph4 ba b--white-20 bg-dark-pink pointer helvetica',
})``

// Benefits Section

const BenefitsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const BenefitsWrapper = styled.main.attrs({
  className:
    'flex flex-column flex-row-l items-center-m items-end-l justify-center ph2-ns pv4 pv6-ns',
})``

const BenefitsRow = styled.main.attrs({
  className: 'flex-column ph5-ns',
})``

const BenefitsBox = styled.main.attrs({
  className: 'pa2 pv5',
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
  className: 'dt w-100 bg-purple',
})``

const OSSWrapper = styled.main.attrs({
  className: 'flex-ns justify-around-ns items-center pv6 ph5-m ph6-l',
})``

const OSSTextWrapper = styled.main.attrs({
  className: 'dtc pr5-m pr6-l',
})``

const OSSTitle = styled.main.attrs({
  className: 'f2 tc tl-ns b white helvetica',
})``

const OSSParagraph = styled.main.attrs({
  className: 'f5 mt3 ph4 ph0-ns mw7-ns tc tl-ns white lh-copy helvetica',
})``

const OSSButton = styled.main.attrs({
  className:
    'ml5 ml0-ns f6 b mt4 dib white bg-animate hover-bg-white hover-dark-pink no-underline pv2 ph4 ba b--white-20 bg-dark-pink pointer helvetica',
})``

const OSSSvg = styled.main.attrs({
  className: 'dn db-ns ml4-m ml6-l mr2-l w-30 w-50-m w-30-l',
})``

// Contacts Section

const ContactsSection = styled.main.attrs({
  className: 'dt w-100',
})``

const ContactsWrapper = styled.main.attrs({
  className: 'flex-ns justify-around-ns items-center pv6 ph5-m ph6-l',
})``

const ContactsTextWrapper = styled.main.attrs({
  className: 'dtc',
})``

const ContactsTitle = styled.main.attrs({
  className: 'f2 tc tl-ns b black helvetica',
})``

const ContactsParagraph = styled.main.attrs({
  className: 'f5 mt3 ph4 ph0-ns mw6-ns tc tl-ns black lh-copy helvetica',
})``

const ContactsSvg = styled.main.attrs({
  className: 'dn db-ns mr4-m mr7-l ml2-l w-30 w-30-m w-20-l',
})``

const ContactsIcons = styled.main.attrs({
  className: 'mt4 tc tl-ns',
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

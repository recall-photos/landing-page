import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

export function Nav({ siteTitle }) {
  return (
    <NavMenu>
      <LeftContainer>
        <Logo>
          <Link to="/">
            <LogoImage alt={siteTitle} />
          </Link>
        </Logo>
      </LeftContainer>
      <RightContainer>
        <Link to="/about">
          <Url>About</Url>
        </Link>
        <Link to="/#0">
          <Button>Sign In</Button>
        </Link>
      </RightContainer>
    </NavMenu>
  )
}

const NavMenu = styled.main.attrs({
  className: 'absolute flex justify-between ph4 z-max',
})``
const LeftContainer = styled.main.attrs({
  className: 'link black-70 black-white no-underline flex items-center',
})``
const Logo = styled.main.attrs({
  className: 'dib h1 w4 nt2',
})``
const RightContainer = styled.h2.attrs({
  className: 'flex-grow flex items-center',
})``
const Url = styled.h2.attrs({
  className: 'f6 link dib black dim mr3 mr4-ns',
})``
const Button = styled.h2.attrs({
  className:
    'f6 dib black bg-animate hover-bg-black hover-black no-underline pv2 ph4 br-pill ba b--black-20',
})``

export default Nav

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.logo.childImageSharp.fluid} />}
  />
)

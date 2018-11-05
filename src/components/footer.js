import React from 'react'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const Footer = () => (
  <Main>
    <a href="#" class="f6 link dim gray dib mr3 mr4-ns">Roadmap</a>
    <a href="#" class="f6 link dim gray dib mr3 mr4-ns">Talk to us</a>
  </Main>
)

const Main = styled.main.attrs({
  className: 'dt w-100',
})``

const Link = styled.main.attrs({
  className: 'dt w-100',
})``

export default Footer;
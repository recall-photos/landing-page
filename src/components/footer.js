import React from 'react'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const Footer = () => (
  <Main>
    <a href="#" class="f7 link dim gray dib mr3 mr4-ns helvetica">Roadmap</a>
    <a href="#" class="f7 link dim gray dib mr3 mr4-ns helvetica">Talk to us</a>
  </Main>
)

const Main = styled.main.attrs({
  className: 'flex justify-center dt w-100 pb3',
})``

export default Footer;
import React from 'react'

import 'tachyons/css/tachyons.min.css'
import styled from 'styled-components'

const Footer = () => (
  <Main>
    <div class="mb3 center">
        <a href="https://trello.com/b/EMKJ0T7f/recall-roadmap" target="_blank" rel="noopener noreferrer" class="f6 link dim underline black-80 dib mr3 mr4-ns helvetica">Roadmap</a>
        <a href="https://twitter.com/recallphotos" target="_blank" rel="noopener noreferrer" class="f6 link dim black-80 dib underline mr3 mr4-ns helvetica">Talk to us</a>
    </div>
    <div class="center">
        <p class="f7 gray dib mr2 helvetica">Started by</p>
        <a href="https://twitter.com/alvesjtiago" target="_blank" rel="noopener noreferrer" class="f7 link dim underline gray dib mr2 helvetica">Tiago Alves</a>
        <p class="f7 gray dib mr2 helvetica">&</p>
        <a href="https://twitter.com/jackveiga" target="_blank" rel="noopener noreferrer" class="f7 link dim underline gray dib helvetica">Jack Veiga</a>
    </div>
  </Main>
)

const Main = styled.main.attrs({
  className: 'flex flex-column justify-center dt w-100 pb3',
})``

export default Footer;
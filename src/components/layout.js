import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Recall every day of your life. Safely store and access your photos using Blockstack. Your memories, your data.' },
            { name: 'keywords', content: 'recall, photos, recall photos, blockstack, google photos, photos storage, blockstack photos, photos, dropbox photos, upload photos, open source photos, safe photo storage' },
            { name: 'og:title', content: 'Recall' },
            { name: 'og:description', content: 'Recall every day of your life. Safely store and access your photos using Blockstack. Your memories, your data.' },
            { name: 'og:image', content: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3969f232784b2b43d8bdbef93b603ffe&auto=format&fit=crop&w=1392&q=80' },
            { name: 'og:url', content: 'https://www.recall.photos' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 2580,
            padding: '0 0 0',
            paddingTop: 0,
            zIndex: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

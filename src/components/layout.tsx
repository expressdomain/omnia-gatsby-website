import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo'
import Footer from '../footer'
import Header from '../header'
import styled from '@emotion/styled'

const GlobalWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    overflow-y: hidden;
  }
`

const Layout = ({ children }) => {
  const {
    wp: {
      seo,
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <SEOContext.Provider value={{ global: seo }}>
      <GlobalWrapper>
        <Header />

        <main>{children}</main>

        <Footer />
      </GlobalWrapper>
    </SEOContext.Provider>
  )
}

export default Layout

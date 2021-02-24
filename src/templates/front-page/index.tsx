import React from 'react'
import Layout from '../../components/layout'
import FeaturedBlog from './FeaturedBlog'
import styled from 'styled-components'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

const BlogWrapper = styled.div`
  @media only screen and (min-width: 416px) {
    margin-top: 160px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
`

const HeroInnerContainer = styled.div`
    margin-right: 50px;
`

const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, homepageACF },
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <div id="primary" className="content-area">
            <main id="main" className="site-main">

              {window.innerWidth <= 414 ? (
                // Mobile layout
                <div className="hero-container">
                  <div className="hero-header">
                    <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                    <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                  </div>
                  <img
                    className="hero-image"
                    src={homepageACF.heroImage.sourceUrl}
                    alt=""
                  />
                  <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>

                </div>
                // Desktop layout
              ) : (
                  <div className="hero-container">
                    <HeroInnerContainer className="hero-inner-container">
                    <div className="hero-header">
                      <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                      <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                    </div>
                    <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
                    <div className="hero-button-container">
                      <div className="hero-button-square">
                        <div className="hero-button-triangle"></div>
                      </div>
                    </div>
                    </HeroInnerContainer>
                    <img
                      className="hero-image"
                      src={homepageACF.heroImage.sourceUrl}
                      alt=""
                    />

                  </div>
                )}

              <div className="usp-services-container">
                <h2 className="usp-header">{parse(homepageACF.uspHeader)}</h2>
                <div className="usp-services-inner-container">
                  {/* Update into fluid gatsby */}
                  <img
                    className="services-image"
                    src={homepageACF.servicesImage.sourceUrl}
                    alt=""
                  />
                  <div className="services-text-container">
                    <h3 className="services-header">{parse(homepageACF.servicesHeader)}</h3>
                    <div className="services-content flex">
                      <div className="bullet-list bullet-list-margin">{parse(homepageACF.servicesContent)}</div>
                      <div className="bullet-list bullet-list-margin">{parse(homepageACF.servicesContent1)}</div>
                    </div>
                    <div className="services-button">
                      <button className="lees-verder-button">
                        <Link className="lees-verder-link" to={'#'}>
                          Lees verder
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <BlogWrapper className="Blog-Wrapper">
                <FeaturedBlog />
              </BlogWrapper>
            </main>
          </div>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage

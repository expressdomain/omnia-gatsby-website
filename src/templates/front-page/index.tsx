import React from 'react'
import Layout from '../../components/layout'
import FeaturedBlog from './featured-blog'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 414px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  @media only screen and (min-width: 416px) {
    display: none;
  }
`

const HeroContainer = styled.div`
  @media only screen and (min-width: 416px) {
    margin-bottom: 130px;
    margin-left: -230px;
    display: flex;
    flex-flow: row;
  }
  @media only screen and (max-width: 414px) {
  }
`

const HeroInnerContainer = styled.div`
  padding: 0 4rem;
  background-color: hsl(247, 69%, 15%);
`

const HeroHeader = styled.div`
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  @media only screen and (min-width: 416px) {
    margin-bottom: 45px;
    padding-top: 146px;
    width: 685px;
  }
  @media only screen and (max-width: 414px) {
    background-color: hsl(241, 64%, 15%);
    padding: 1rem 2rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: var(--color-heading-white);
  }
`

const HeroSubTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const HeroButtonContainer = styled.div`
  @media only screen and (min-width: 416px) {
    position: relative;
    top: 95px;
    left: 713px;
    width: fit-content;
    z-index: 1;
  }
  @media only screen and (max-width: 414px) {
    display: none;
  }
`

const UspServicesContainer = styled.div`
  border-radius: 5px;
  @media only screen and (min-width: 416px) {
    background-color: #120c42;
    height: 400px;
    width: 1230px;
    padding: 80px 0 0 125px;
  }
  @media only screen and (max-width: 414px) {
    padding: 2.75rem 2rem 1rem;
  }
`

const UspServicesInnerContainer = styled.div`
  border-radius: 5px;
  flex-flow: row;
  display: flex;
  @media only screen and (min-width: 416px) {
    padding-top: 80px;
  }
`

const ServicesTextContainer = styled.div`
  @media only screen and (min-width: 416px) {
    padding: 37px 55px 0 56px;
    border-radius: 5px;
    box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
    background-color: hsl(264, 71%, 43%);
  }
`

const ServicesContent = styled.div`
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: 0.24px;
  text-align: left;
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 414px) {
    flex-flow: column;
    color: hsl(247, 69%, 15%);
  }
`

const ServicesButton = styled.div`
  position: relative;

  @media only screen and (min-width: 416px) {
    top: 26px;
    left: 230px;
    max-width: 138.55px;
  }
  @media only screen and (max-width: 414px) {
    max-width: 94.73px;
    top: 10px;
    left: -60px;
  }
`

const BlogWrapper = styled.div`
  @media only screen and (min-width: 416px) {
    margin-top: 160px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
`

const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, homepageACF },
    },
  } = props

  const heroImage = {
    img: homepageACF.heroImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: homepageACF.heroImage?.altText || ``,
  }

  const servicesImage = {
    img: homepageACF.servicesImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: homepageACF.servicesImage?.altText || ``,
  }

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <MobileWrapper>
                <HeroContainer>
                  {heroImage?.img && (
                    <GatsbyImage image={heroImage.img} alt={heroImage.alt} className="hero-image" />
                  )}
                  <HeroHeader>
                    <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                    <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                    <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
                  </HeroHeader>
                </HeroContainer>
              </MobileWrapper>

              <DesktopWrapper>
                <HeroContainer>
                  <HeroInnerContainer>
                    <HeroHeader>
                      <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                      <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                    </HeroHeader>
                    <HeroSubTextContainer>
                      <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
                    </HeroSubTextContainer>
                    <HeroButtonContainer>
                      <div className="hero-button-square">
                        <div className="hero-button-triangle"></div>
                      </div>
                    </HeroButtonContainer>
                  </HeroInnerContainer>
                  {heroImage?.img && (
                    <GatsbyImage image={heroImage.img} alt={heroImage.alt} className="hero-image" />
                  )}
                </HeroContainer>
              </DesktopWrapper>

              <UspServicesContainer>
                <h2 className="usp-header">{parse(homepageACF.uspHeader)}</h2>
                <UspServicesInnerContainer>
                  {servicesImage?.img && (
                    <GatsbyImage
                      image={servicesImage.img}
                      alt={servicesImage.alt}
                      className="services-image"
                    />
                  )}
                  <ServicesTextContainer>
                    <h3 className="services-header">{parse(homepageACF.servicesHeader)}</h3>
                    <ServicesContent>
                      <div className="bullet-list bullet-list-margin">
                        {parse(homepageACF.servicesContent)}
                      </div>
                      <div className="bullet-list bullet-list-margin">
                        {parse(homepageACF.servicesContent1)}
                      </div>
                    </ServicesContent>
                    <ServicesButton>
                      <button className="lees-verder-button">
                        <Link className="lees-verder-link" to={'/diensten/'}>
                          Lees verder
                        </Link>
                      </button>
                    </ServicesButton>
                  </ServicesTextContainer>
                </UspServicesInnerContainer>
              </UspServicesContainer>
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

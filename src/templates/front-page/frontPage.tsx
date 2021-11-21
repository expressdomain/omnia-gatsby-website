import React from 'react'
import Layout from '../../components/layout'
import FeaturedBlog from './featured-blog'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import AutoHelmet from '../../components/helmet'
import * as S from './frontPageStyles'

const LEES_VERDER = 'Lees verder'
const SOMETHING_WRONG = 'Er is iets fout gegaan'

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
          <AutoHelmet title={title} />
          <S.MobileWrapper>
            <S.HeroContainer>
              {heroImage?.img && (
                <GatsbyImage image={heroImage.img} alt={heroImage.alt} className="hero-image" />
              )}
              <S.HeroHeader>
                <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
              </S.HeroHeader>
            </S.HeroContainer>
          </S.MobileWrapper>

          <S.DesktopWrapper>
            <S.HeroContainer>
              <S.HeroInnerContainer>
                <S.HeroHeader>
                  <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                  <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                </S.HeroHeader>
                <S.HeroSubTextContainer>
                  <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
                </S.HeroSubTextContainer>
                <S.HeroButtonContainer>
                  <div className="hero-button-square">
                    <div className="hero-button-triangle"></div>
                  </div>
                </S.HeroButtonContainer>
              </S.HeroInnerContainer>
              {heroImage?.img && (
                <GatsbyImage image={heroImage.img} alt={heroImage.alt} className="hero-image" />
              )}
            </S.HeroContainer>
          </S.DesktopWrapper>

          <S.UspServicesWrapper>
            <S.UspServicesContainer>
              <h2 className="usp-header">{parse(homepageACF.uspHeader)}</h2>
              <S.UspServicesInnerContainer>
                {servicesImage?.img && (
                  <GatsbyImage
                    image={servicesImage.img}
                    alt={servicesImage.alt}
                    className="services-image"
                  />
                )}
                <S.ServicesTextContainer>
                  <h3 className="services-header">{parse(homepageACF.servicesHeader)}</h3>
                  <S.ServicesContent>
                    <div className="bullet-list bullet-list-margin">
                      {parse(homepageACF.servicesContent)}
                    </div>
                    <div className="bullet-list bullet-list-margin">
                      {parse(homepageACF.servicesContent1)}
                    </div>
                  </S.ServicesContent>
                  <S.ServicesButton to={'/diensten/'}>
                    <button className="lees-verder-button">
                      <span className="lees-verder-link">{LEES_VERDER}</span>
                    </button>
                  </S.ServicesButton>
                </S.ServicesTextContainer>
              </S.UspServicesInnerContainer>
            </S.UspServicesContainer>
          </S.UspServicesWrapper>
          <S.BlogWrapper className="Blog-Wrapper">
            <FeaturedBlog />
          </S.BlogWrapper>
        </>
      ) : (
        <div>{SOMETHING_WRONG}</div>
      )}
    </Layout>
  )
}

export default Homepage

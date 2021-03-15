import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import FeaturedBlog from '../front-page/featured-blog'
import { GatsbyImage } from 'gatsby-plugin-image'

const OverWrapper = styled.div`
  margin-bottom: 10%;
  max-width: 1240px;
  justify-self: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    grid-column: 1 / 4;
  }
`

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

const OverHeaderWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    border-radius: 5px;
    margin-top: 5%;
  }
  @media only screen and (min-width: 481px) {
    background-color: hsl(247, 69%, 15%);
  }
`

const OverHeader = styled.div`
  color: white;
  /* max-width: 920px; */
  margin: 0 auto;
  /* padding: 1rem; */
  display: flex;
  flex-flow: row;
  padding-top: 2rem;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
    padding: 1rem 3rem;
    background-color: hsl(247, 69%, 15%);
    border-radius: 5px;
  }
`

const OverInnerHeader = styled.div`
  margin-left: 2.3rem;
  max-width: 540px;
  @media only screen and (max-width: 1024px) {
    max-width: 360px;
  }
  @media only screen and (max-width: 480px) {
    margin: 1rem 3rem;
  }
`

const HeroMobileContainer = styled.div`
  display: flex;
  place-content: center;
`

const OverContentContainer = styled.div`
  display: flex;
  place-content: center;
`

const OverContentInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-top: 10%;
  @media only screen and (max-width: 1024px) {
    margin: 5% 5%;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const OverContentItem = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`

const OverInnerContent = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1.5rem;
`

const Over = (props) => {
  const {
    pageContext: {
      page: { title, content, uri, overACF },
    },
  } = props

  const bierImage = {
    img: overACF.bierImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: overACF.bierImage?.altTextText || `bierImage`,
  }

  const dnaImage = {
    img: overACF.dnaImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: overACF.dnaImage?.altText || `dnaImage`,
  }

  const gbImage = {
    img: overACF.gbImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: overACF.gbImage?.altText || `groningseBrabanderImage`,
  }

  const kennisProjectervaringImage = {
    img: overACF.kennisProjectervaringImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: overACF.kennisProjectervaringImage?.altText || `kennisProjectervaringImage`,
  }

  const overHeroImage = {
    img: overACF.overHeroImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: overACF.overHeroImage?.altText || `overHeroImage`,
  }

  const werkgeversWerkervaringImage = {
    img: overACF.werkgeversWerkervaringImage?.localFile?.childImageSharp?.gatsbyImageData,
    alt: overACF.werkgeversWerkervaringImage?.altText || `werkgeversWerkervaringImage`,
  }

  return (
    <Layout>
      {props.pageContext ? (
        <OverWrapper className="over-wrapper">
          <DesktopWrapper className="desktop-wrapper">
            {/* Desktop setup */}
            <OverHeaderWrapper className="over-header-wrapper">
              <OverHeader className="over-header">
                {overHeroImage?.img && (
                  <GatsbyImage
                    image={overHeroImage.img}
                    alt={overHeroImage.alt}
                    className="over-hero-image"
                  />
                )}
                <OverInnerHeader className="over-inner-header">
                  <h1 className="over-page-header">{parse(overACF.overHeroHeader)}</h1>
                  <p className="over-page-subtext">{parse(overACF.overHeroBody)}</p>
                </OverInnerHeader>
              </OverHeader>
            </OverHeaderWrapper>
          </DesktopWrapper>

          {/* Mobile setup */}
          <MobileWrapper>
            <OverHeaderWrapper>
              <OverHeader>
                <HeroMobileContainer>
                  {overHeroImage?.img && (
                    <GatsbyImage
                      image={overHeroImage.img}
                      alt={overHeroImage.alt}
                      className="over-hero-image"
                    />
                  )}
                </HeroMobileContainer>
                <h1 className="over-page-header">{parse(overACF.overHeroHeader)}</h1>
                <p className="over-page-subtext">{parse(overACF.overHeroBody)}</p>
              </OverHeader>
            </OverHeaderWrapper>
          </MobileWrapper>

          <OverContentContainer className="over-content-container">
            <OverContentInnerContainer className="over-content-inner-container">
              <OverContentItem className="over-content-item">
                {gbImage?.img && (
                  <GatsbyImage
                    image={gbImage.img}
                    alt={gbImage.alt}
                    className="over-detail-image"
                  />
                )}
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.gbHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.gbBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                {kennisProjectervaringImage?.img && (
                  <GatsbyImage
                    image={kennisProjectervaringImage.img}
                    alt={kennisProjectervaringImage.alt}
                    className="over-detail-image"
                  />
                )}
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.kennisProjectervaringHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.kennisProjectervaringBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                {dnaImage?.img && (
                  <GatsbyImage
                    image={dnaImage.img}
                    alt={dnaImage.alt}
                    className="over-detail-image"
                  />
                )}
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.dnaHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.dnaBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                {bierImage?.img && (
                  <GatsbyImage
                    image={bierImage.img}
                    alt={bierImage.alt}
                    className="over-detail-image"
                  />
                )}
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.bierHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.bierBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                {werkgeversWerkervaringImage?.img && (
                  <GatsbyImage
                    image={werkgeversWerkervaringImage.img}
                    alt={werkgeversWerkervaringImage.alt}
                    className="over-detail-image"
                  />
                )}
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">
                    {parse(overACF.werkgeversWerkervaringHeader)}
                  </h2>
                  <p className="over-item-body">{parse(overACF.werkgeversWerkervaringBody)}</p>
                </OverInnerContent>
              </OverContentItem>
            </OverContentInnerContainer>
          </OverContentContainer>
        </OverWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Over

import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import FeaturedBlog from '../front-page/featured-blog'
import { GatsbyImage } from 'gatsby-plugin-image'
import AutoHelmet from '../../components/helmet'
import * as S from './overStyles'
import * as global from '../../constants/globalConstants'

const Over = (props) => {
  const {
    pageContext: {
      page: { title, overACF },
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
        <>
          <AutoHelmet title={title} />
          <S.OverWrapper className="over-wrapper">
            <S.DesktopWrapper className="desktop-wrapper">
              <S.OverHeaderWrapper className="over-header-wrapper">
                <S.OverHeader className="over-header">
                  {overHeroImage?.img && (
                    <GatsbyImage
                      image={overHeroImage.img}
                      alt={overHeroImage.alt}
                      className="over-hero-image"
                    />
                  )}
                  <S.OverInnerHeader className="over-inner-header">
                    <h1 className="over-page-header">{parse(overACF.overHeroHeader)}</h1>
                    <p className="over-page-subtext">{parse(overACF.overHeroBody)}</p>
                  </S.OverInnerHeader>
                </S.OverHeader>
              </S.OverHeaderWrapper>
            </S.DesktopWrapper>

            <S.MobileWrapper>
              <S.OverHeaderWrapper>
                <S.OverHeader>
                  <S.HeroMobileContainer>
                    {overHeroImage?.img && (
                      <GatsbyImage
                        image={overHeroImage.img}
                        alt={overHeroImage.alt}
                        className="over-hero-image"
                      />
                    )}
                  </S.HeroMobileContainer>
                  <h1 className="over-page-header">{parse(overACF.overHeroHeader)}</h1>
                  <p className="over-page-subtext">{parse(overACF.overHeroBody)}</p>
                </S.OverHeader>
              </S.OverHeaderWrapper>
            </S.MobileWrapper>

            <S.OverContentContainer className="over-content-container">
              <S.OverContentInnerContainer className="over-content-inner-container">
                <S.OverContentItem className="over-content-item">
                  {gbImage?.img && (
                    <GatsbyImage
                      image={gbImage.img}
                      alt={gbImage.alt}
                      className="over-detail-image"
                    />
                  )}
                  <S.OverInnerContent className="over-inner-content">
                    <h2 className="over-item-header">{parse(overACF.gbHeader)}</h2>
                    <p className="over-item-body">{parse(overACF.gbBody)}</p>
                  </S.OverInnerContent>
                </S.OverContentItem>
                <S.OverContentItem className="over-content-item">
                  {kennisProjectervaringImage?.img && (
                    <GatsbyImage
                      image={kennisProjectervaringImage.img}
                      alt={kennisProjectervaringImage.alt}
                      className="over-detail-image"
                    />
                  )}
                  <S.OverInnerContent className="over-inner-content">
                    <h2 className="over-item-header">
                      {parse(overACF.kennisProjectervaringHeader)}
                    </h2>
                    <p className="over-item-body">{parse(overACF.kennisProjectervaringBody)}</p>
                  </S.OverInnerContent>
                </S.OverContentItem>
                <S.OverContentItem className="over-content-item">
                  {dnaImage?.img && (
                    <GatsbyImage
                      image={dnaImage.img}
                      alt={dnaImage.alt}
                      className="over-detail-image"
                    />
                  )}
                  <S.OverInnerContent className="over-inner-content">
                    <h2 className="over-item-header">{parse(overACF.dnaHeader)}</h2>
                    <p className="over-item-body">{parse(overACF.dnaBody)}</p>
                  </S.OverInnerContent>
                </S.OverContentItem>
                <S.OverContentItem className="over-content-item">
                  {bierImage?.img && (
                    <GatsbyImage
                      image={bierImage.img}
                      alt={bierImage.alt}
                      className="over-detail-image"
                    />
                  )}
                  <S.OverInnerContent className="over-inner-content">
                    <h2 className="over-item-header">{parse(overACF.bierHeader)}</h2>
                    <p className="over-item-body">{parse(overACF.bierBody)}</p>
                  </S.OverInnerContent>
                </S.OverContentItem>
                <S.OverContentItem className="over-content-item">
                  {werkgeversWerkervaringImage?.img && (
                    <GatsbyImage
                      image={werkgeversWerkervaringImage.img}
                      alt={werkgeversWerkervaringImage.alt}
                      className="over-detail-image"
                    />
                  )}
                  <S.OverInnerContent className="over-inner-content">
                    <h2 className="over-item-header">
                      {parse(overACF.werkgeversWerkervaringHeader)}
                    </h2>
                    <p className="over-item-body">{parse(overACF.werkgeversWerkervaringBody)}</p>
                  </S.OverInnerContent>
                </S.OverContentItem>
              </S.OverContentInnerContainer>
            </S.OverContentContainer>
          </S.OverWrapper>
        </>
      ) : (
        <div>{global.SOMETHING_WRONG}</div>
      )}
    </Layout>
  )
}

export default Over

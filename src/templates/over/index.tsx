import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import { getFeaturedImageUrl } from '../../utils/functions'
import FeaturedBlog from '../front-page/FeaturedBlog'

const OverWrapper = styled.div`
  margin-bottom: 10%;
`

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

const OverHeaderWrapper = styled.div`
    @media only screen and (min-width: 416px) {
      border-radius: 5px;
      margin-top: 10%;
    }
  @media only screen and (min-width: 416px) {
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
  @media only screen and (max-width: 414px) {
        flex-flow: column;
        padding: 0 3rem;
    }
`

const OverInnerHeader = styled.div`
  margin-left: 2.3rem;
  max-width: 540px;
  @media only screen and (max-width: 414px) {
    margin: 1rem 3rem;
  }
`

const HeroMobileContainer = styled.div`
  margin: 0 -3rem;
  display: flex;
  place-content: center;
  background-color: hsl(247, 69%, 15%);
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
  @media only screen and (max-width: 414px) {
    margin: 5% 5%;
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

  return (
    <Layout>
      {props.pageContext ? (
        <OverWrapper className="over-wrapper">
          
          <DesktopWrapper className="desktop-wrapper">
          {/* Desktop setup */}
          <OverHeaderWrapper className="over-header-wrapper">
            <OverHeader className="over-header">
              <img
                src={getFeaturedImageUrl(overACF?.overHeroImage?.localFile?.url)}
                alt="featured-blog"
                className="over-hero-image"
              />
              <OverInnerHeader className="over-inner-header">
                <h1 className="over-page-header">{parse(overACF.overHeroHeader)}</h1>
                <p className="over-page-subtext">{parse(overACF.overHeroBody)}</p>
              </OverInnerHeader>
            </OverHeader>
            </OverHeaderWrapper>
          </DesktopWrapper>

          {/* Mobile setup */}
          <MobileWrapper className="mobile-wrapper">
          <OverHeaderWrapper className="over-header-wrapper">
            <OverHeader className="over-header">
                <h1 className="over-page-header">{parse(overACF.overHeroHeader)}</h1>
                  <HeroMobileContainer className="hero-mobile-container">  
              <img
                src={getFeaturedImageUrl(overACF?.overHeroImage?.localFile?.url)}
                alt="featured-blog"
                className="over-hero-image"
                    />
                  </HeroMobileContainer> 
                <p className="over-page-subtext">{parse(overACF.overHeroBody)}</p>
            </OverHeader>
            </OverHeaderWrapper>
          </MobileWrapper>

          <OverContentContainer className="over-content-container">
            <OverContentInnerContainer className="over-content-inner-container">
              <OverContentItem className="over-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.gbImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.gbHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.gbBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.kennisProjectervaringImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.kennisProjectervaringHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.kennisProjectervaringBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.dnaImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.dnaHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.dnaBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.bierImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <OverInnerContent className="over-inner-content">
                  <h2 className="over-item-header">{parse(overACF.bierHeader)}</h2>
                  <p className="over-item-body">{parse(overACF.bierBody)}</p>
                </OverInnerContent>
              </OverContentItem>
              <OverContentItem className="over-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.werkgeversWerkervaringImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
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

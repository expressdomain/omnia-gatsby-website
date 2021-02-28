import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { getFeaturedImageUrl } from '../../utils/functions'
import FeaturedBlog from '../front-page/FeaturedBlog'

const ServicesWrapper = styled.div`
  /* margin: 0 auto;
  max-width: 1060px; */
`

const ServicesHeaderWrapper = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
`

const ServicesHeader = styled.div`
  color: white;
  max-width: 920px;
  margin: 0 auto;
  padding: 1rem;
  /* height: 440px; */
`

const ServicesInnerHeader = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 2rem;
`

const AboutContentContainer = styled.div`
  display: flex;
  place-content: center;
`

const AboutContentInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

const AboutContentItem = styled.div`
  /* width: 260px;
  height: 260px; */
  padding: 44px;
`

const Over = (props) => {
  const {
    pageContext: {
      page: { title, content, uri, overACF },
    },
  } = props

  console.log(props)

  return (
    <Layout>
      {props.pageContext ? (
        <ServicesWrapper className="services-wrapper">
          <ServicesHeaderWrapper className="services-header-wrapper">
            <ServicesHeader className="services-header">
              <div className="services-detail-header">{parse(content)}</div>
            </ServicesHeader>
          </ServicesHeaderWrapper>
          <AboutContentContainer className="services-content-container">
            <AboutContentInnerContainer className="services-content-inner-container">
              <AboutContentItem className="services-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.gbImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <h2 className="over-item-header">{parse(overACF.gbHeader)}</h2>
                <p className="services-item-body primary">{parse(overACF.gbBody)}</p>
              </AboutContentItem>
              <AboutContentItem className="services-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.kennisProjectervaringImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <h2 className="over-item-header">{parse(overACF.kennisProjectervaringHeader)}</h2>
                <p className="services-item-body primary">
                  {parse(overACF.kennisProjectervaringBody)}
                </p>
              </AboutContentItem>
              <AboutContentItem className="services-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.dnaImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <h2 className="over-item-header">{parse(overACF.dnaHeader)}</h2>
                <p className="services-item-body primary">{parse(overACF.dnaBody)}</p>
              </AboutContentItem>
              <AboutContentItem className="services-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.bierImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <h2 className="over-item-header">{parse(overACF.bierHeader)}</h2>
                <p className="services-item-body primary">{parse(overACF.bierBody)}</p>
              </AboutContentItem>
              <AboutContentItem className="services-content-item">
                <img
                  src={getFeaturedImageUrl(overACF?.werkgeversWerkervaringImage?.localFile?.url)}
                  alt="featured-blog"
                  className="over-detail-image"
                />
                <h2 className="over-item-header">{parse(overACF.werkgeversWerkervaringHeader)}</h2>
                <p className="services-item-body primary">
                  {parse(overACF.werkgeversWerkervaringBody)}
                </p>
              </AboutContentItem>
            </AboutContentInnerContainer>
          </AboutContentContainer>
        </ServicesWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Over

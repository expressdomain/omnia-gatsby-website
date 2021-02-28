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

const ServicesContentContainer = styled.div`
  display: flex;
  place-content: center;
`

const ServicesContentInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

const ServicesContentItem = styled.div`
  width: 260px;
  height: 260px;
  padding: 44px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
`

const ServicesContentImage = styled.div`
  width: 348px;
  height: 348px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
`

const ServicesContentItemSecondary = styled.div`
  width: 260px;
  height: 260px;
  padding: 44px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(258, 60%, 44%);
`
const BlogWrapper = styled.div`
  margin-top: 160px;
  margin-bottom: 100px;
  display: flex;
  place-content: center;
`

const Diensten = (props) => {
  const {
    pageContext: {
      page: { title, content, uri, dienstenACF },
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <ServicesWrapper className="services-wrapper">
          <ServicesHeaderWrapper className="services-header-wrapper">
            <ServicesHeader className="services-header">
              <div className="services-detail-header">{parse(content)}</div>
            </ServicesHeader>
          </ServicesHeaderWrapper>
          <ServicesContentContainer className="services-content-container">
            <ServicesContentInnerContainer className="services-content-inner-container">
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">{parse(dienstenACF.adviesHeader)}</h2>
                <p className="services-item-body primary">{parse(dienstenACF.adviesBody)}</p>
              </ServicesContentItem>
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">{parse(dienstenACF.visieHeader)}</h2>
                <p className="services-item-body primary">{parse(dienstenACF.visieBody)}</p>
              </ServicesContentItem>
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.beleidsplanningHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.beleidsplanningBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.aanbestedingenHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.aanbestedingenBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentImage className="services-content-image">
                <img
                  src={getFeaturedImageUrl(dienstenACF?.image?.localFile?.url)}
                  alt="john-mollema"
                  className="services-detail-image"
                />
              </ServicesContentImage>
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.procesmanagementHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.procesmanagementBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.projectmanagementHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.projectmanagementBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentItem className="services-content-item">
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.sparringHeader)}
                </h2>
                <p className="services-item-body primary">{parse(dienstenACF.sparringBody)}</p>
              </ServicesContentItem>
              <ServicesContentItemSecondary className="services-content-secondary">
                <h2 className="services-item-header secondary">
                  {parse(dienstenACF.andereUitdagingHeader)}
                </h2>
                <p className="services-item-body secondary">
                  {parse(dienstenACF.andereUitdagingBody)}
                </p>
              </ServicesContentItemSecondary>
            </ServicesContentInnerContainer>
          </ServicesContentContainer>
          <BlogWrapper className="Blog-Wrapper">
            <FeaturedBlog />
          </BlogWrapper>
        </ServicesWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Diensten

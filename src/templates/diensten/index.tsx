import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import FeaturedBlog from '../front-page/featured-blog'
import { GatsbyImage } from 'gatsby-plugin-image'

const ServicesWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    margin-top: 10%;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 5%;
  }
`

const ServicesHeaderWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    background-color: hsl(247, 69%, 15%);
    border-radius: 5px;
  }
  @media only screen and (max-width: 480px) {
  }
`

const ServicesHeader = styled.div`
  color: white;
  @media only screen and (min-width: 481px) {
    max-width: 920px;
    /* margin: 0 auto; */
    padding: 3rem 4rem 15rem;
  }
  @media only screen and (max-width: 480px) {
    margin: 1rem 3.5rem;
  }
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
  @media only screen and (min-width: 481px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
  }
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
  @media only screen and (min-width: 481px) {
    width: 348px;
    height: 348px;
    border-radius: 5px;
    box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
    background-color: hsl(0, 0%, 100%);
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
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
  display: flex;
  place-content: center;
  @media only screen and (min-width: 481px) {
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 2%;
  }
`

const Diensten = (props) => {
  const {
    pageContext: {
      page: { content, dienstenACF },
    },
  } = props

  const image = {
    img: dienstenACF.image?.localFile?.childImageSharp?.gatsbyImageData,
    alt: dienstenACF.image?.altText || ``,
  }

  return (
    <Layout>
      {props.pageContext ? (
        <ServicesWrapper>
          <ServicesHeaderWrapper>
            <ServicesHeader>
              <div className="services-detail-header">{parse(content)}</div>
            </ServicesHeader>
          </ServicesHeaderWrapper>
          <ServicesContentContainer>
            <ServicesContentInnerContainer>
              <ServicesContentItem>
                <h2 className="services-item-header primary">{parse(dienstenACF.adviesHeader)}</h2>
                <p className="services-item-body primary">{parse(dienstenACF.adviesBody)}</p>
              </ServicesContentItem>
              <ServicesContentItem>
                <h2 className="services-item-header primary">{parse(dienstenACF.visieHeader)}</h2>
                <p className="services-item-body primary">{parse(dienstenACF.visieBody)}</p>
              </ServicesContentItem>
              <ServicesContentItem>
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.beleidsplanningHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.beleidsplanningBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentItem>
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.aanbestedingenHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.aanbestedingenBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentImage>
                {image?.img && (
                  <GatsbyImage
                    image={image.img}
                    alt={image.alt}
                    className="services-detail-image"
                  />
                )}
              </ServicesContentImage>
              <ServicesContentItem>
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.procesmanagementHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.procesmanagementBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentItem>
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.projectmanagementHeader)}
                </h2>
                <p className="services-item-body primary">
                  {parse(dienstenACF.projectmanagementBody)}
                </p>
              </ServicesContentItem>
              <ServicesContentItem>
                <h2 className="services-item-header primary">
                  {parse(dienstenACF.sparringHeader)}
                </h2>
                <p className="services-item-body primary">{parse(dienstenACF.sparringBody)}</p>
              </ServicesContentItem>
              <ServicesContentItemSecondary>
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

import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import FeaturedBlog from '../front-page/featured-blog'
import { GatsbyImage } from 'gatsby-plugin-image'
import AutoHelmet from '../../components/helmet'
import * as S from './dienstenStyles'
import * as global from '../../constants/globalConstants'

const Diensten = (props) => {
  const {
    pageContext: {
      page: { title, content, dienstenACF },
    },
  } = props

  const image = {
    img: dienstenACF.image?.localFile?.childImageSharp?.gatsbyImageData,
    alt: dienstenACF.image?.altText || ``,
  }

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <AutoHelmet title={title} />
          <S.ServicesWrapper>
            <S.ServicesHeaderWrapper>
              <S.ServicesHeader>
                <div className="services-detail-header">{parse(content)}</div>
              </S.ServicesHeader>
            </S.ServicesHeaderWrapper>
            <S.ServicesContentContainer>
              <S.ServicesContentInnerContainer>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">
                    {parse(dienstenACF.adviesHeader)}
                  </h2>
                  <p className="services-item-body primary">{parse(dienstenACF.adviesBody)}</p>
                </S.ServicesContentItem>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">{parse(dienstenACF.visieHeader)}</h2>
                  <p className="services-item-body primary">{parse(dienstenACF.visieBody)}</p>
                </S.ServicesContentItem>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">
                    {parse(dienstenACF.beleidsplanningHeader)}
                  </h2>
                  <p className="services-item-body primary">
                    {parse(dienstenACF.beleidsplanningBody)}
                  </p>
                </S.ServicesContentItem>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">
                    {parse(dienstenACF.aanbestedingenHeader)}
                  </h2>
                  <p className="services-item-body primary">
                    {parse(dienstenACF.aanbestedingenBody)}
                  </p>
                </S.ServicesContentItem>
                <S.ServicesContentImage>
                  {image?.img && (
                    <GatsbyImage
                      image={image.img}
                      alt={image.alt}
                      className="services-detail-image"
                    />
                  )}
                </S.ServicesContentImage>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">
                    {parse(dienstenACF.procesmanagementHeader)}
                  </h2>
                  <p className="services-item-body primary">
                    {parse(dienstenACF.procesmanagementBody)}
                  </p>
                </S.ServicesContentItem>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">
                    {parse(dienstenACF.projectmanagementHeader)}
                  </h2>
                  <p className="services-item-body primary">
                    {parse(dienstenACF.projectmanagementBody)}
                  </p>
                </S.ServicesContentItem>
                <S.ServicesContentItem>
                  <h2 className="services-item-header primary">
                    {parse(dienstenACF.sparringHeader)}
                  </h2>
                  <p className="services-item-body primary">{parse(dienstenACF.sparringBody)}</p>
                </S.ServicesContentItem>
                <S.ServicesContentItemSecondary>
                  <h2 className="services-item-header secondary">
                    {parse(dienstenACF.andereUitdagingHeader)}
                  </h2>
                  <p className="services-item-body secondary">
                    {parse(dienstenACF.andereUitdagingBody)}
                  </p>
                </S.ServicesContentItemSecondary>
              </S.ServicesContentInnerContainer>
            </S.ServicesContentContainer>
            <S.BlogWrapper className="Blog-Wrapper">
              <FeaturedBlog />
            </S.BlogWrapper>
          </S.ServicesWrapper>
        </>
      ) : (
        <div>{global.SOMETHING_WRONG}</div>
      )}
    </Layout>
  )
}

export default Diensten

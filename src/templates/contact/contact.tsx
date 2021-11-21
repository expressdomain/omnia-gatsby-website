import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import AutoHelmet from '../../components/helmet'
import * as S from './contactStyles'
import * as global from '../../constants/globalConstants'

const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, content, contactACF },
    },
  } = props

  const gMapsImage = {
    img: contactACF?.contactGmaps?.localFile?.childImageSharp?.gatsbyImageData,
    alt: contactACF?.contactGmaps?.altText || `google-maps-location`,
  }

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <AutoHelmet title={title} />
          <S.ContactWrapper>
            <S.DesktopWrapper>
              <S.ContactHeaderContainer>
                <S.ContactHeaderContent>
                  <h1 className="contact-header">{parse(contactACF.contactHeader)}</h1>
                  <S.ContactHeaderInner>
                    {gMapsImage.img !== undefined || null ? (
                      <GatsbyImage
                        image={gMapsImage.img}
                        alt={gMapsImage.alt}
                        className="contact-location-image"
                      />
                    ) : (
                      <StaticImage
                        src="../../images/featured_blog_placeholder.png"
                        alt="placeholder"
                        className="contact-location-image"
                      />
                    )}
                    <div className="contact-body-text">{parse(content)}</div>
                  </S.ContactHeaderInner>
                </S.ContactHeaderContent>
              </S.ContactHeaderContainer>
            </S.DesktopWrapper>

            <S.MobileWrapper>
              <S.ContactHeaderContainer>
                <S.ContactHeaderContent>
                  <S.ContactHeaderInner>
                    <S.HeroMobileContainer>
                      {gMapsImage.img !== undefined || null ? (
                        <GatsbyImage
                          image={gMapsImage.img}
                          alt={gMapsImage.alt}
                          className="contact-location-image"
                        />
                      ) : (
                        <StaticImage
                          src="../../images/featured_blog_placeholder.png"
                          alt="placeholder"
                          className="contact-location-image"
                        />
                      )}
                    </S.HeroMobileContainer>
                    <h1 className="contact-header">{parse(contactACF.contactHeader)}</h1>
                    <div className="contact-body-text">{parse(content)}</div>
                  </S.ContactHeaderInner>
                </S.ContactHeaderContent>
              </S.ContactHeaderContainer>
            </S.MobileWrapper>
          </S.ContactWrapper>
        </>
      ) : (
        <div>{global.SOMETHING_WRONG}</div>
      )}
    </Layout>
  )
}

export default Homepage

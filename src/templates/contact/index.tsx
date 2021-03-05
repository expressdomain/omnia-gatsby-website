import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import { getFeaturedImageUrl } from '../../utils/functions'

const ContactWrapper = styled.div`
  margin-bottom: 10%;
  @media only screen and (max-width: 414px) {
    margin-bottom: 0;
  }
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

const ContactHeaderContainer = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  margin-top: 10%;
  @media only screen and (max-width: 414px) {
    background-color: transparent;
    margin-top: 5%;
  }
`

const ContactHeaderInner = styled.div`
  display: flex;
  flex-flow: row;
  @media only screen and (max-width: 414px) {
    flex-flow: column;
  }
`

const HeroMobileContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  place-content: center;
  background-color: hsl(247, 69%, 15%);
`

const ContactHeaderContent = styled.div`
  @media only screen and (min-width: 416px) {
    margin: 0 auto;
    padding: 2rem 13rem;
    height: 425px;
  }
`

const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, content, contactACF },
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <ContactWrapper>
          {/* Desktop setup */}
          <DesktopWrapper>
            <ContactHeaderContainer>
              <ContactHeaderContent>
                <h1 className="contact-header">{parse(contactACF.contactHeader)}</h1>
                <ContactHeaderInner>
                  <img
                    src={getFeaturedImageUrl(contactACF?.contactGmaps.localFile.url)}
                    alt="google-maps-location"
                    className="contact-location-image"
                  />
                  <p className="contact-body-text">{parse(content)}</p>
                </ContactHeaderInner>
              </ContactHeaderContent>
            </ContactHeaderContainer>
          </DesktopWrapper>

          {/* Mobile setup   */}
          <MobileWrapper>
            <ContactHeaderContainer>
              <ContactHeaderContent>
                <h1 className="contact-header">{parse(contactACF.contactHeader)}</h1>
                <ContactHeaderInner>
                  <HeroMobileContainer>
                    <img
                      src={getFeaturedImageUrl(contactACF?.contactGmaps.localFile.url)}
                      alt="google-maps-location"
                      className="contact-location-image"
                    />
                  </HeroMobileContainer>
                  <p className="contact-body-text">{parse(content)}</p>
                </ContactHeaderInner>
              </ContactHeaderContent>
            </ContactHeaderContainer>
          </MobileWrapper>
        </ContactWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage

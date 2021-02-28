import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { getFeaturedImageUrl } from '../../utils/functions'

const ContactWrapper = styled.div`
  margin-bottom: 10%;
`

const ContactHeaderContainer = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  margin-top: 10%;
`

const ContactHeaderInner = styled.div`
  display: flex;
  flex-flow: row;
`

const ContactHeaderContent = styled.div`
  margin: 0 auto;
  padding: 2rem 13rem;
`

const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, content, contactACF },
    },
  } = props

  console.log(contactACF)

  return (
    <Layout>
      {props.pageContext ? (
        <ContactWrapper className="contact-wrapper">
          <ContactHeaderContainer className="contact-header-container">
            <ContactHeaderContent className="contact-header-content">
              <h1 className="contact-header">{parse(contactACF.contactHeader)}</h1>
              <ContactHeaderInner className="contact-header-inner">
                <img
                  src={getFeaturedImageUrl(contactACF?.contactGmaps.localFile.url)}
                  alt="google-maps-location"
                  className="contact-location-image"
                />
                <p className="contact-body-text">{parse(contactACF.contactBody)}</p>
              </ContactHeaderInner>
            </ContactHeaderContent>
          </ContactHeaderContainer>
        </ContactWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage

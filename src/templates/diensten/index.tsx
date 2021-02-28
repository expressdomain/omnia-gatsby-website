import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { getFeaturedImageUrl } from '../../utils/functions'

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
  height: 440px;
`

const ServicesInnerHeader = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 2rem;
`

const ServicesContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-bottom: 5rem;
`

const ServicesContentItem = styled.div`
  width: 260px;
  height: 260px;
  padding: 44px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
`

const ServicesContentItemPurple = styled.div`
  width: 260px;
  height: 260px;
  padding: 44px;
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(258, 60%, 44%);
`

const Diensten = (props) => {
  const {
    pageContext: {
      page: { title, uri, dienstenACF },
    },
  } = props

  // console.log(props.pageContext.page.featuredImage)

  return (
    <Layout>
      {props.pageContext ? (
        <ServicesWrapper className="Services-wrapper">
          <ServicesHeaderWrapper className="Services-header-wrapper">
            <ServicesHeader className="Services-header">
              <h2 className="Services-detail-header">{parse(title)}</h2>
              <ServicesInnerHeader className="Services-inner-header">
                <p>Test</p>
              </ServicesInnerHeader>
            </ServicesHeader>
          </ServicesHeaderWrapper>
          <ServicesContentContainer className="Services-content-container">
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.adviesHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.adviesBody)}</p>
            </ServicesContentItem>
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.visieHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.visieBody)}</p>
            </ServicesContentItem>
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.beleidsplanningHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.beleidsplanningBody)}</p>
            </ServicesContentItem>
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.aanbestedingenHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.aanbestedingenBody)}</p>
            </ServicesContentItem>
            <ServicesContentItem>
              <img
                src={getFeaturedImageUrl(featuredImage?.node?.localFile?.url)}
                alt="john-mollema"
                className="services-detail-image"
              />
            </ServicesContentItem>
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.procesmanagementHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.procesmanagementBody)}</p>
            </ServicesContentItem>
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.projectmanagementHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.projectmanagementBody)}</p>
            </ServicesContentItem>
            <ServicesContentItem>
              <h2 className="services-item-header primary">{parse(dienstenACF.sparringHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.sparringBody)}</p>
            </ServicesContentItem>
            <ServicesContentItemPurple>
              <h2 className="services-item-header secondary">{parse(dienstenACF.andereUitdagingHeader)}</h2>
              <p className="services-item-body">{parse(dienstenACF.andereUitdagingBody)}</p>
            </ServicesContentItemPurple>
          </ServicesContentContainer>
        </ServicesWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Diensten

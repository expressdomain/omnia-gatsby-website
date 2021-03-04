import React from 'react'
import Layout from '../../components/layout'
import FeaturedBlog from './FeaturedBlog'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

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

const HeroContainer = styled.div`
	@media only screen and (min-width: 416px) {
		// margin-bottom: 45px;
		// padding-top: 146px;
		// width: 685px;
		// height: 815px;
		// width: 1750px;
		margin-bottom: 130px;
		margin-left: -230px;
		margin-top: 50px;
		display: flex;
		flex-flow: row;
	}
	@media only screen and (max-width: 414px) {
	}
`

const HeroInnerContainer = styled.div`
  margin-right: 50px;
`

const HeroHeader = styled.div`
  	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	text-align: left;
	@media only screen and (min-width: 416px) {
		margin-bottom: 45px;
		padding-top: 146px;
		width: 685px;
	}
	@media only screen and (max-width: 414px) {
		background-color: hsl(241, 64%, 15%);
		padding: 1rem 2rem;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		color: var(--color-heading-white);
	}
`

const HeroButtonContainer = styled.div`
	@media only screen and (min-width: 416px) {
		position: relative;
		top: 95px;
		left: 700px;
		width: fit-content;
	}
	@media only screen and (max-width: 414px) {
		display: none;
	}
`

const UspServicesContainer = styled.div`
	background-color: #120c42;
	border-radius: 5px;
	@media only screen and (min-width: 416px) {
		height: 400px;
		width: 1230px;
		padding: 80px 0 0 125px;
	}
	@media only screen and (max-width: 414px) {
		padding: 1rem 2rem;
	}
`

const UspServicesInnerContainer = styled.div`
	border-radius: 5px;
	flex-flow: row;
	display: flex;
	@media only screen and (min-width: 416px) {
    padding-top: 80px;
	}
	@media only screen and (max-width: 414px) {
    background-color: #120c42;
	}
`

const ServicesTextContainer = styled.div`
	@media only screen and (min-width: 416px) {
		padding: 37px 55px 0 56px;
		border-radius: 5px;
		box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
		background-color: hsl(264, 71%, 43%);
	}
	@media only screen and (max-width: 414px) {
	}
`

const ServicesContent = styled.div`
	font-size: 16px;
	font-weight: 300;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.88;
	letter-spacing: 0.24px;
	text-align: left;
	color: hsl(0, 0%, 100%);
	display: flex;
	flex-flow: column;
`

const ServicesButton = styled.div`
  position: relative;

	@media only screen and (min-width: 416px) {
		top: 26px;
		left: 230px;
		max-width: 138.55px;
	}
	@media only screen and (max-width: 414px) {
		max-width: 94.73px;
		top: 32px;
		left: -60px;
	}
`

const BlogWrapper = styled.div`
  @media only screen and (min-width: 416px) {
    margin-top: 160px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
`


const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, homepageACF },
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <div id="primary" className="content-area">
            <main id="main" className="site-main">

              <MobileWrapper>
                <HeroContainer>
                  <HeroHeader>
                    <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                    <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                  </HeroHeader>
                  <img className="hero-image" src={homepageACF.heroImage.sourceUrl} alt="" />
                  <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
                </HeroContainer>
              </MobileWrapper>

              <DesktopWrapper>
              <HeroContainer>
                <HeroInnerContainer>
                  <HeroHeader>
                    <p className="hero-small">{parse(homepageACF.heroSubHeader)}</p>
                    <h1 className="hero-big">{parse(homepageACF.heroHeader)}</h1>
                  </HeroHeader>
                  <p className="hero-subtext">{parse(homepageACF.heroSubtext)}</p>
                  <HeroButtonContainer>
                    <div className="hero-button-square">
                      <div className="hero-button-triangle"></div>
                    </div>
                  </HeroButtonContainer>
                </HeroInnerContainer>
                <img className="hero-image" src={homepageACF.heroImage.sourceUrl} alt="" />
                </HeroContainer>
              </DesktopWrapper>

              <UspServicesContainer>
                <h2 className="usp-header">{parse(homepageACF.uspHeader)}</h2>
                <UspServicesInnerContainer>
                  {/* Update into fluid gatsby */}
                  <img
                    className="services-image"
                    src={homepageACF.servicesImage.sourceUrl}
                    alt=""
                  />
                  <ServicesTextContainer>
                    <h3 className="services-header">{parse(homepageACF.servicesHeader)}</h3>
                    <ServicesContent>
                      <div className="bullet-list bullet-list-margin">
                        {parse(homepageACF.servicesContent)}
                      </div>
                      <div className="bullet-list bullet-list-margin">
                        {parse(homepageACF.servicesContent1)}
                      </div>
                    </ServicesContent>
                    <ServicesButton>
                      <button className="lees-verder-button">
                        <Link className="lees-verder-link" to={'/diensten/'}>
                          Lees verder
                        </Link>
                      </button>
                    </ServicesButton>
                  </ServicesTextContainer>
                </UspServicesInnerContainer>
              </UspServicesContainer>
              <BlogWrapper className="Blog-Wrapper">
                <FeaturedBlog />
              </BlogWrapper>
            </main>
          </div>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage

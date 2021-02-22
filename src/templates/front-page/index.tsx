import React from 'react'
import Layout from '../../components/layout'

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
              <div className="hero-container">
                <div className="hero-header">
                  <p
                    className="hero-small hero-dark"
                    dangerouslySetInnerHTML={{
                      __html: homepageACF.heroSubHeader,
                    }}
                  />
                  <h1
                    className="hero-dark hero-big"
                    dangerouslySetInnerHTML={{
                      __html: homepageACF.heroHeader,
                    }}
                  />
                </div>
                <p
                  className="hero-subtext"
                  dangerouslySetInnerHTML={{
                    __html: homepageACF.heroSubtext,
                  }}
                />

                <div className="hero-button-container">
                  <div className="hero-button-square">
                    <div className="hero-button-triangle"></div>
                  </div>
                </div>
              </div>

              <div className="usp-services-container">
                <h2
                  className="usp-header"
                  dangerouslySetInnerHTML={{
                    __html: homepageACF.uspHeader,
                  }}
                />
                <div className="flex f-row pt-8">
                  {/* Update into fluid gatsby */}
                  <img
                    className="services-image"
                    src={homepageACF.servicesImage.sourceUrl}
                    alt=""
                  />
                  <div className="services-text-container">
                    <h3
                      className="services-header"
                      dangerouslySetInnerHTML={{
                        __html: homepageACF.servicesHeader,
                      }}
                    />
                    <div className="services-content flex">
                      <div
                        className="bullet-list mr-8"
                        dangerouslySetInnerHTML={{
                          __html: homepageACF.servicesContent,
                        }}
                      />
                      <div
                        className="bullet-list mr-8"
                        dangerouslySetInnerHTML={{
                          __html: homepageACF.servicesContent1,
                        }}
                      />
                    </div>
                    <div className="services-button">
                      <button className="lees-meer-button">Lees meer</button>
                    </div>
                  </div>
                </div>
              </div>
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

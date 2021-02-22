import React from 'react'
import Layout from '../../components/layout'

const Homepage = (props) => {
  const {
    pageContext: {
      page: { title, uri, content },
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <>
          {title}
          <p
            className="hero-subtext"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage

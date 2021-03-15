import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import AutoHelmet from '../../components/helmet'

const PageTemplate = (props) => {
  const {
    pageContext: {
      page: { title, content },
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <AutoHelmet title={title} />
          <h1>{parse(title)}</h1>
          <p>{parse(content)}</p>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default PageTemplate

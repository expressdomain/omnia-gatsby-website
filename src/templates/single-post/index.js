import React from 'react'
import Layout from '../../components/layout'
import styled from 'styled-components'

const SinglePostTemplate = (props) => {
  const {
    pageContext: { title, seo, uri },
  } = props

  console.log(props.pageContext)

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <h2>{props.pageContext.title}</h2>
          <p>test</p>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default SinglePostTemplate

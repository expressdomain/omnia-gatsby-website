import React from 'react'
import Layout from '../../components/layout'
import SinglePost from '../../components/single-post'

const SinglePostTemplate = (props) => {
  const {
    pageContext: { title, seo, uri },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <SinglePost data={props.pageContext} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default SinglePostTemplate

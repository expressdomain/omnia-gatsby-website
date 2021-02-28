import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { getFeaturedImageUrl } from '../../utils/functions'
import RelatedBlogs from './related-blogs'

const BlogWrapper = styled.div`
  /* margin: 0 auto;
  max-width: 1060px; */
`

const BlogHeaderWrapper = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
`

const BlogHeader = styled.div`
  color: white;
  max-width: 920px;
  margin: 0 auto;
  @media only screen and (min-width: 416px) {
    height: 440px;
    padding: 1rem;
  }
  @media only screen and (max-width: 414px) {
    padding: 1rem 0;
  }
`

const BlogInnerHeader = styled.div`
  @media only screen and (min-width: 416px) {
    display: flex;
    flex-flow: row;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 414px) {
  }
`

const BlogContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
  max-width: 60%;
  @media only screen and (min-width: 416px) {
    margin-top: 12.5rem;
  }
  @media only screen and (max-width: 414px) {
    margin-top: 2rem;
  }
`

const SinglePostTemplate = (props) => {
  const {
    pageContext: { title, blogPreview, content, featuredImage, seo, uri, id },
  } = props

  // console.log(props.pageContext)

  return (
    <Layout>
      {props.pageContext ? (
        <BlogWrapper className="blog-wrapper">
          <BlogHeaderWrapper className="blog-header-wrapper">
            <BlogHeader className="blog-header">
              <h2 className="blog-detail-header">{parse(title)}</h2>
              <BlogInnerHeader className="blog-inner-header">
                <img
                  src={getFeaturedImageUrl(featuredImage?.node?.localFile?.url)}
                  alt="featured-blog"
                  className="blog-detail-image"
                />
                {blogPreview.blogPreview !== null ? (
                  <p className="blog-detail-toptext">{parse(blogPreview.blogPreview)}</p>
                ) : (
                  <pre>No body found</pre>
                )}
              </BlogInnerHeader>
            </BlogHeader>
          </BlogHeaderWrapper>
          <BlogContentContainer className="blog-content-container">
            <p>{parse(content)}</p>
          </BlogContentContainer>
          <RelatedBlogs />
        </BlogWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default SinglePostTemplate

import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import { getFeaturedImageUrl } from '../../utils/functions'
import RelatedBlogs from './related-blogs'

const BlogWrapper = styled.div`
  /* margin: 0 auto;
  max-width: 1060px; */
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

const BlogHeaderWrapper = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  @media only screen and (max-width: 414px) {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

const BlogHeader = styled.div`
  color: white;
  max-width: 920px;
  margin: 0 auto;
  padding: 1rem;
  height: 440px;
`

const BlogInnerHeader = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 2rem;
`

const BlogContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 416px) {
    margin-top: 12.5rem;
    max-width: 60%;
    margin-bottom: 10%;
    }
  @media only screen and (max-width: 414px) {
    margin-top: 2rem;
    max-width: 80%;
  }
`

const SinglePostTemplate = (props) => {
  const {
    pageContext: { title, blogPreview, content, featuredImage, seo, uri, id },
  } = props

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

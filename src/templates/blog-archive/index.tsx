import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import { getFeaturedImageUrl } from '../../utils/functions'
import BlogPreview from '../../components/blog-preview'
import blog_icon from '../../images/blog_icon.png'

const BlogWrapper = styled.div`
  margin-bottom: 10%;
`

const BlogOverviewHeaderContainer = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  margin-top: 10%;
`

const BlogOverviewHeaderInner = styled.div`
  padding: 3rem 7.375rem;
`

const BlogContainer = styled.div`
  /* display: flex;
  place-items: center; */
  max-width: 990px;
  margin: 0 auto;
`

const BlogInnerContainer = styled.div`
  /* display: flex;
  flex-flow: row; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 2rem;
`

const BlogArchive = (props) => {
  const {
    pageContext: {
      page: { title, uri, content, blogOverviewACF },
      allPosts
    },
  } = props

  return (
    <Layout>
      {props.pageContext ? (
        <BlogWrapper className="contact-wrapper">
          <BlogOverviewHeaderContainer className="blog-overview-header-container">
            {/* <img src={blog_icon} alt="blog-icon" className="related-blog-icon" /> */}
            <BlogOverviewHeaderInner className="blog-overview-header-inner">
              <h1 className="blog-overview-header">{parse(blogOverviewACF.blogOverviewHeader)}</h1>
            </BlogOverviewHeaderInner>
          </BlogOverviewHeaderContainer>
          <BlogContainer className="blog-container">
          <BlogInnerContainer className="blog-inner-container">
          {allPosts !== undefined || null ? (
            allPosts.map((post) => <BlogPreview post={post} />)
          ) : (
              <pre style={{ color: 'white' }}>No related blog items found.</pre>
            )}
            </BlogInnerContainer>
          </BlogContainer>
        </BlogWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default BlogArchive

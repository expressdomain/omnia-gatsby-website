import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { getFeaturedImageUrl } from '../../utils/functions'
import BlogPreview from '../../components/blog-preview'

const RelatedBlogWrapper = styled.div`
  background-color: hsl(264, 71%, 43%);
  border-radius: 5px;
  display: grid;
  @media only screen and (min-width: 416px) {
    margin-bottom: 630px;
  }
  @media only screen and (max-width: 414px) {
    margin-top: 4rem;
  }
`

const RelatedBlogInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 70px;
  @media only screen and (min-width: 416px) {
    margin: 4rem 7.375rem 10rem;
  }
  @media only screen and (max-width: 414px) {
  }
`

const BlogInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto 1fr);
  grid-column-gap: 2rem;
`

const BlogItem = styled.div`
  max-width: 550px;
  margin-left: 48px;
  margin-top: 100px;
`

const RelatedBlogs = () => {

  const { allWpPost } = useStaticQuery(graphql`
    query OTHER_POSTS {
      allWpPost(limit: 4) {
        nodes {
          id
          title
          uri
          slug
          blogPreview {
            blogPreview
          }
          featuredImage {
            node {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {allWpPost !== null ? (
        <RelatedBlogWrapper className="related-blog-wrapper">
          <RelatedBlogInner className="related-blog-inner">
            <div style={{ display: `flex`, flexFlow: `row`}}>
              <h2 className="related-blog-header">
                Dit vindt je misschien <br /> ook interessant
              </h2>
              <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
            </div>
            {window.innerWidth >= 416 ? (
            <BlogInnerContainer className="blog-inner-container">
              {allWpPost !== undefined ? (
                allWpPost.nodes.map((post) => <BlogPreview post={post} />)
              ) : (
                <pre style={{ color: 'white' }}>No related blog items found.</pre>
              )}
            </BlogInnerContainer>
            ) : (
                <p>Test</p>
              )}
          </RelatedBlogInner>
        </RelatedBlogWrapper>
      ) : (
        <pre style={{ color: 'darkred' }}>This component has not loaded succesfully.</pre>
      )}
    </>
  )
}

export default RelatedBlogs

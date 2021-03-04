import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { getFeaturedImageUrl } from '../../utils/functions'
import BlogPreview from '../../components/blog-preview/'
import BlogPreviewMobile from '../../components/blog-preview/mobile-blog-detail'

const RelatedBlogWrapper = styled.div`
  border-radius: 5px;
  display: grid;
  @media only screen and (min-width: 416px) {
    margin-bottom: 630px;
    background-color: hsl(264, 71%, 43%);
  }
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

const RelatedBlogInner = styled.div`
  margin: 4rem 7.375rem 10rem;
  display: flex;
  flex-flow: row;
`

const BlogContainer = styled.div`
  margin: 4rem 7.375rem 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 70px;
`

const BlogInnerContainer = styled.div`
  @media only screen and (min-width: 416px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 2rem;
  }
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

  const latestPost = allWpPost.nodes.slice(-1)
  console.log('slice', latestPost[0])
  console.log('select', allWpPost.nodes[0])

  return (
    <>
      {allWpPost !== null ? (
        <RelatedBlogWrapper className="related-blog-wrapper">
          <DesktopWrapper>
            <BlogContainer>
              <div style={{ display: `flex`, flexFlow: `row` }}>
                <h2 className="related-blog-header">
                  Dit vindt je misschien <br /> ook interessant
                </h2>
                <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
              </div>
              <BlogInnerContainer className="blog-inner-container">
                {allWpPost !== undefined || null ? (
                  allWpPost.nodes.map((post) => <BlogPreview post={post} />)
                ) : (
                  <pre style={{ color: 'white' }}>No related blog items found.</pre>
                )}
              </BlogInnerContainer>
            </BlogContainer>
          </DesktopWrapper>

          <MobileWrapper>
            <>
              <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
              <BlogInnerContainer className="blog-inner-container">
                {allWpPost !== undefined || null ? (
                  <BlogPreviewMobile post={latestPost[0]} />
                ) : (
                  <pre style={{ color: 'white' }}>No related blog items found.</pre>
                )}
              </BlogInnerContainer>
            </>
          </MobileWrapper>
        </RelatedBlogWrapper>
      ) : (
        <pre style={{ color: 'darkred' }}>This component has not loaded succesfully.</pre>
      )}
    </>
  )
}

export default RelatedBlogs

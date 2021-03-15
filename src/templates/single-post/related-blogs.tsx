import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import BlogPreview from '../../components/blog-preview/'
import BlogPreviewMobile from '../../components/blog-preview/mobile-blog-detail'

const RelatedBlogWrapper = styled.div`
  border-radius: 5px;
  /* display: grid; */
  @media only screen and (min-width: 481px) {
    /* margin-bottom: 630px; */
    /* background-color: hsl(264, 71%, 43%); */
  }
`

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 1026px) {
    display: none;
  }
`

const TabletWrapper = styled.div`
  @media only screen and (min-width: 1025px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

const RelatedBlogHeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  background-color: hsl(264, 71%, 43%);
  border-radius: 5px;
`

const RelatedBlogInnerHeader = styled.div`
  padding: 3rem 7.375rem 10rem;

  @media only screen and (max-width: 768px) {
    padding: 3rem 1.375rem 10rem;
  }
`

const RelatedBlogInner = styled.div`
  margin: 4rem 7.375rem 10rem;
  display: flex;
  flex-flow: row;
`

const BlogContainer = styled.div`
  /* margin: 4rem 7.375rem 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 70px; */
`

const BlogInnerContainer = styled.div`
  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(3, 310px);
    grid-column-gap: 2rem;
    transform: translateY(-230px);
    max-width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 310px);
    grid-column-gap: 2rem;
    transform: translateY(-230px);
    max-width: 100%;
  }
  @media only screen and (max-width: 481px) {
    display: initial;
  }
`

const BlogItem = styled.div`
  max-width: 550px;
  margin-left: 48px;
  margin-top: 100px;
`

const RelatedBlogs = ({ currentBlog }) => {
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
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const otherRelatedPosts = allWpPost.nodes.filter((post) => post.id !== currentBlog)
  const latestThreePosts = otherRelatedPosts.slice(-3)
  const latestTwoPosts = otherRelatedPosts.slice(-2)
  const latestPost = otherRelatedPosts.slice(-1)

  return (
    <>
      {allWpPost !== null ? (
        <RelatedBlogWrapper>
          <DesktopWrapper>
            <BlogContainer>
              <RelatedBlogHeaderContainer>
                <RelatedBlogInnerHeader>
                  <h2 className="related-blog-header">
                    Dit vindt je misschien <br /> ook interessant
                  </h2>
                  <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
                </RelatedBlogInnerHeader>
              </RelatedBlogHeaderContainer>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BlogInnerContainer>
                  {latestThreePosts !== undefined || null ? (
                    latestThreePosts.map((post) => <BlogPreview key={post.id} post={post} />)
                  ) : (
                    <pre style={{ color: 'white' }}>No related blog items found.</pre>
                  )}
                </BlogInnerContainer>
              </div>
            </BlogContainer>
          </DesktopWrapper>

          <TabletWrapper>
            <BlogContainer>
              <RelatedBlogHeaderContainer>
                <RelatedBlogInnerHeader>
                  <h2 className="related-blog-header">
                    Dit vindt je misschien <br /> ook interessant
                  </h2>
                  <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
                </RelatedBlogInnerHeader>
              </RelatedBlogHeaderContainer>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BlogInnerContainer>
                  {latestTwoPosts !== undefined || null ? (
                    latestTwoPosts.map((post) => <BlogPreview key={post.id} post={post} />)
                  ) : (
                    <pre style={{ color: 'white' }}>No related blog items found.</pre>
                  )}
                </BlogInnerContainer>
              </div>
            </BlogContainer>
          </TabletWrapper>

          <MobileWrapper>
            <>
              <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
              <BlogInnerContainer>
                {latestPost !== undefined || null ? (
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

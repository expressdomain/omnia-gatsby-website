import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import blog_icon from '../../../images/blog_icon.png'
import BlogPreview from '../../../components/blog-preview/blogPreview'
import BlogPreviewMobile from '../../../components/blog-preview/mobile-blog-detail/mobileBlogDetail'
import * as global from '../../../constants/globalConstants'
import * as S from './relatedBlogStyles'

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
      {allWpPost ? (
        <S.RelatedBlogWrapper>
          <S.DesktopWrapper>
            <S.BlogContainer>
              <S.RelatedBlogHeaderContainer>
                <S.RelatedBlogInnerHeader>
                  <h2 className="related-blog-header">
                    Dit vind je misschien <br /> ook interessant
                  </h2>
                  <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
                </S.RelatedBlogInnerHeader>
              </S.RelatedBlogHeaderContainer>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <S.BlogInnerContainer>
                  {latestThreePosts ? (
                    latestThreePosts.map((post) => <BlogPreview key={post.id} post={post} />)
                  ) : (
                    <pre style={{ color: 'white' }}>{global.NO_RELATED_ITEMS}</pre>
                  )}
                </S.BlogInnerContainer>
              </div>
            </S.BlogContainer>
          </S.DesktopWrapper>

          <S.TabletWrapper>
            <S.BlogContainer>
              <S.RelatedBlogHeaderContainer>
                <S.RelatedBlogInnerHeader>
                  <h2 className="related-blog-header">
                    Dit vind je misschien <br /> ook interessant
                  </h2>
                  <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
                </S.RelatedBlogInnerHeader>
              </S.RelatedBlogHeaderContainer>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <S.BlogInnerContainer>
                  {latestTwoPosts ? (
                    latestTwoPosts.map((post) => <BlogPreview key={post.id} post={post} />)
                  ) : (
                    <pre style={{ color: 'white' }}>{global.NO_RELATED_ITEMS}</pre>
                  )}
                </S.BlogInnerContainer>
              </div>
            </S.BlogContainer>
          </S.TabletWrapper>

          <S.MobileWrapper>
            <>
              <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
              <S.BlogInnerContainer>
                {latestPost ? (
                  <BlogPreviewMobile post={latestPost[0]} />
                ) : (
                  <pre style={{ color: 'white' }}>{global.NO_RELATED_ITEMS}</pre>
                )}
              </S.BlogInnerContainer>
            </>
          </S.MobileWrapper>
        </S.RelatedBlogWrapper>
      ) : (
        <pre style={{ color: 'darkred' }}>{global.SOMETHING_WRONG}</pre>
      )}
    </>
  )
}

export default RelatedBlogs

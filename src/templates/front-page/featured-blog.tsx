import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const BlogInnerWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    height: 358px;
  }
  @media only screen and (min-width: 481px) {
    display: flex;
    flex-flow: column;
  }
`

const BlogMobileOverlay = styled.div`
    @media only screen and (max-width: 480px) {
      background: rgba(255, 255, 255, 0.33);
      overflow: hidden;
      height: 292px;
    }
`

const BlogInnerContainer = styled.div`
  @media only screen and (min-width: 481px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4%;
    padding: 0 5rem;
  }
`

const BlogItem = styled.div`
  @media only screen and (min-width: 481px) {
    /* margin-left: 48px; */
    margin-top: 20%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  @media only screen and (max-width: 480px) {
    position: relative;
    top: -240px;
    padding: 0 30px;
  }
`

const FeaturedBlog = () => {
  const { wpPost } = useStaticQuery(graphql`
    query FeaturedBlogQuery {
      wpPost(categories: { nodes: { elemMatch: { name: { eq: "Featured" } } } }) {
        uri
        slug
        title
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
  `)

  const featuredImage = {
    img: wpPost.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: wpPost.servicesImage?.node?.altText || `featured-image`,
  }

  return (
    <>
      {wpPost !== null ? (
        <BlogInnerWrapper>
          <BlogInnerContainer>
            <div>
              <img src={blog_icon} alt="blog-icon" className="featured-blog-icon" />
              <BlogMobileOverlay>
              {featuredImage.img !== undefined || null ? (
                <GatsbyImage
                  image={featuredImage.img}
                  alt={featuredImage.alt}
                  className="featured-blog-image"
                />
              ) : (
                <StaticImage
                  src="../../images/featured_blog_placeholder.png"
                  alt="placeholder"
                  className="featured-blog-image"
                />
                )}
              </BlogMobileOverlay>
            </div>
            <BlogItem>
              <h3 className="featured-title">{parse(wpPost.title)}</h3>
              {wpPost.blogPreview.blogPreview !== null ? (
                <p className="featured-excerpt">{parse(wpPost.blogPreview.blogPreview)}</p>
              ) : (
                <div className="featured-excerpt">
                  <pre>No Preview found.</pre>
                </div>
              )}
              <Link to={`/blog${wpPost.uri}`}>
                <button className="lees-verder-button">
                  <span className="lees-verder-link">Lees verder</span>
                </button>
              </Link>
            </BlogItem>
          </BlogInnerContainer>
        </BlogInnerWrapper>
      ) : (
        <pre style={{ color: 'darkred' }}>No featured blog item found.</pre>
      )}
    </>
  )
}

export default FeaturedBlog

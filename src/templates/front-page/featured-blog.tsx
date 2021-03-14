import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const BlogInnerWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    height: 375px;
  }
  @media only screen and (min-width: 481px) {
    display: flex;
    flex-flow: column;
  }
`

const BlogInnerContainer = styled.div`
  @media only screen and (min-width: 481px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4%;
  }
`

const BlogItem = styled.div`
  @media only screen and (min-width: 481px) {
    margin-left: 48px;
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

const BlogButton = styled(Link)`
  /* position: relative;

  @media only screen and (min-width: 481px) {
    top: 26px;
    left: 230px;
    max-width: 138.55px;
  }
  @media only screen and (max-width: 480px) {
    max-width: 94.73px;
    top: 10px;
    left: -60px;
  } */
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
            </div>
            <BlogItem>
              <div className="featured-title">{parse(wpPost.title)}</div>
              {wpPost.blogPreview.blogPreview !== null ? (
                <div className="featured-excerpt">{parse(wpPost.blogPreview.blogPreview)}</div>
              ) : (
                <div className="featured-excerpt">
                  <pre>No Preview found.</pre>
                </div>
              )}
              <BlogButton to={`/blog${ wpPost.uri }`}>
              <button className="lees-verder-button">
                <span className="lees-verder-link">
                  Lees verder
                </span>
              </button>
              </BlogButton>
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

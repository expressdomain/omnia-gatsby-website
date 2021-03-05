import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { getFeaturedImageUrl } from '../../utils/functions'
import blog_placeholder from '../../images/featured_blog_placeholder.png'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const BlogInnerWrapper = styled.div`
  @media only screen and (min-width: 416px) {
    display: flex;
    flex-flow: column;
  }
`

const BlogInnerContainer = styled.div`
  @media only screen and (min-width: 416px) {
    display: flex;
    flex-flow: row;
  }
  @media only screen and (max-width: 414px) {
    height: 290px;
  }
`

const BlogItem = styled.div`
  @media only screen and (min-width: 416px) {
    max-width: 550px;
    margin-left: 48px;
    margin-top: 100px;
  }
  @media only screen and (max-width: 414px) {
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
    alt: wpPost.servicesImage?.node?.alt || ``,
  }

  return (
    <>
      {wpPost !== null ? (
        <BlogInnerWrapper className="blog-inner-wrapper">
          <img src={blog_icon} alt="blog-icon" className="featured-blog-icon" />
          <BlogInnerContainer className="blog-inner-container">
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
            <BlogItem className="blog-item">
              <div className="featured-title">{parse(wpPost.title)}</div>
              {wpPost.blogPreview.blogPreview !== null ? (
                <div className="featured-excerpt">{parse(wpPost.blogPreview.blogPreview)}</div>
              ) : (
                <div className="featured-excerpt">
                  <pre>No Preview found.</pre>
                </div>
              )}
              <button className="lees-verder-button">
                <Link className="lees-verder-link" to={`/blog${wpPost.uri}`}>
                  Lees verder
                </Link>
              </button>
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

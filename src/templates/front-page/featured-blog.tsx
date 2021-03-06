import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const BlogInnerWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: flex;
    flex-flow: column;
  }
  @media only screen and (max-width: 480px) {
    height: 358px;
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
  max-width: 1000px;
  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4%;
    padding: 0 5rem;
  }
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4%;
    padding: 0;
  }
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4%;
    padding: 5%;
  }
  @media only screen and (max-width: 480px) {
    display: initial;
    padding: 0;
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
  const { allWpPost: {edges} } = useStaticQuery(graphql`
    query FeaturedBlogQuery {
      allWpPost(sort: {order: DESC, fields: date}, limit: 1) {
        edges {
          node {
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
      }
    }
  `)

  const featuredImage = {
    img: edges[0].node.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: edges[0].node.servicesImage?.node?.altText || `featured-image`,
  }

  return (
    <>
      {edges[0].node !== null ? (
        <BlogInnerWrapper>
          <BlogInnerContainer>
            <div>
              <img src={blog_icon} alt="blog-icon" className="featured-blog-icon" />
              <BlogMobileOverlay>
                <Link className="hover-image" to={`/blog${ edges[0].node.uri }`}>
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
                  </Link>
              </BlogMobileOverlay>
            </div>
            <BlogItem>
              <h3 className="featured-title">{parse(edges[0].node.title)}</h3>
              {edges[0].node.blogPreview.blogPreview !== null ? (
                <p className="featured-excerpt">{parse(edges[0].node.blogPreview.blogPreview)}</p>
              ) : (
                <div className="featured-excerpt">
                  <pre>No Preview found.</pre>
                </div>
              )}
              <Link to={`/blog${ edges[0].node.uri}`}>
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

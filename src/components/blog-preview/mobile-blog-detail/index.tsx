import React from 'react'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const BlogWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  height: 275px;
`

const BlogMobileOverlay = styled.div`
    background: rgba(255, 255, 255, 0.33);
    overflow: hidden;
    height: 292px;
`

const BlogText = styled.div`
  padding: 0 2rem 2rem 2rem;
  position: relative;
  top: -225px;
`

const BlogPreview = ({ post }) => {
  const featuredImageSrc = {
    img: post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post?.featuredImage?.node?.altText || `featured-blog`,
  }

  return (
    <BlogWrapper>
      <BlogMobileOverlay>
      {featuredImageSrc.img !== undefined || null ? (
        <GatsbyImage
          image={featuredImageSrc.img}
          alt={featuredImageSrc.alt}
          className="blog-preview-image"
        />
      ) : (
        <StaticImage
          src="../../images/featured_blog_placeholder.png"
          alt="placeholder"
          className="blog-preview-image"
        />
        )}
      </BlogMobileOverlay>
      <BlogText>
        <h3 className="featured-title" style={{ margin: '0' }}>
          {parse(post.title)}
        </h3>
        <button className="lees-verder-button">
          <Link className="lees-verder-link" to={`/blog${post.uri}`}>
            Lees verder
          </Link>
        </button>
      </BlogText>
    </BlogWrapper>
  )
}

export default BlogPreview

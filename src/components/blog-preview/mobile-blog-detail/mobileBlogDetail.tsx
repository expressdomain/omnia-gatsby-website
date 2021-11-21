import React from 'react'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as S from './mobileBlogDetailStyles'

const LEES_VERDER = 'Lees verder'

const BlogPreview = ({ post }) => {
  const featuredImageSrc = {
    img: post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post?.featuredImage?.node?.altText || `featured-blog`,
  }

  return (
    <S.BlogWrapper>
      <S.BlogMobileOverlay>
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
      </S.BlogMobileOverlay>
      <S.BlogText>
        <h3 className="featured-title" style={{ margin: '0' }}>
          {parse(post.title)}
        </h3>
        <button className="lees-verder-button" type="button">
          <Link className="lees-verder-link" to={`/blog${post.uri}`}>
            {LEES_VERDER}
          </Link>
        </button>
      </S.BlogText>
    </S.BlogWrapper>
  )
}

export default BlogPreview

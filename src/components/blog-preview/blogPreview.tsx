import React from 'react'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { FiChevronRight } from 'react-icons/fi'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as S from './blogPreviewStyles'

const NO_PREVIEW = 'No blog preview found.'
const LEES_VERDER = 'Lees verder'

const BlogPreview = ({ post }) => {
  const featuredImageSrc = {
    img: post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post?.featuredImage?.node?.altText || `featured-image`,
  }

  return (
    <S.BlogWrapper>
      <Link className="hover-image" to={`/blog${ post.uri }`}>
      {featuredImageSrc.img !== undefined || null ? (
        <GatsbyImage
          image={featuredImageSrc.img}
          alt={featuredImageSrc.alt}
          className="blog-preview-image hide-on-mobile"
        />
      ) : (
        <StaticImage
          src="../../images/featured_blog_placeholder.png"
          alt="placeholder"
          className="blog-preview-image hide-on-mobile"
        />
        )}
      </Link>

      <S.BlogText>
        <h3 className="blog-preview-title">{parse(post.title)}</h3>
        {post.blogPreview.blogPreview !== null ? (
          <div className="blog-preview-container">
            <p className="blog-preview-text">{parse(post.blogPreview.blogPreview)}</p>
          </div>
        ) : (
          <pre>{NO_PREVIEW}</pre>
        )}
        <div className="lees-verder-chevron">
          <Link className="blog-link-detail" to={`/blog${post.uri}`}>
            {LEES_VERDER}
          </Link>
          <FiChevronRight />
        </div>
      </S.BlogText>
    </S.BlogWrapper>
  )
}

export default BlogPreview

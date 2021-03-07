import React from 'react'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { FiChevronRight } from 'react-icons/fi'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

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

const BlogWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
  }
`

const BlogText = styled.div`
  padding: 0 2rem 2rem 2rem;
`

const BlogPreview = ({ post }) => {
  const featuredImageSrc = {
    img: post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post?.featuredImage?.node?.altText || `featured-image`,
  }

  return (
    <BlogWrapper className="blog-wrapper">
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

      <BlogText>
        <h3 className="blog-preview-title">{parse(post.title)}</h3>
        {post.blogPreview.blogPreview !== null ? (
          <div className="blog-preview-container">
            <p className="blog-preview-text">{parse(post.blogPreview.blogPreview)}</p>
          </div>
        ) : (
          <pre>No blog preview found.</pre>
        )}
        <div className="lees-verder-chevron">
          <Link className="blog-link-detail" to={`/blog${post.uri}`}>
            Lees verder
          </Link>
          <FiChevronRight />
        </div>
      </BlogText>
    </BlogWrapper>
  )
}

export default BlogPreview

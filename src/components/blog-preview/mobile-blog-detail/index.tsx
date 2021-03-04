import React from 'react'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import { FiChevronRight } from 'react-icons/fi'
import { getFeaturedImageUrl } from '../../../utils/functions'

const BlogWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.15);
  background-color: hsl(0, 0%, 100%);
  height: 297px;
`

const BlogText = styled.div`
  padding: 0 2rem 2rem 2rem;
  position: relative;
  top: -245px;
`

const BlogPreview = ({ post }) => {
  return (
    <BlogWrapper className="blog-wrapper">
      <img
        src={getFeaturedImageUrl(post.featuredImage?.node?.localFile?.url)}
        alt="featured-blog"
        className="blog-preview-image"
      />
      <BlogText>
        <h3 className="featured-title" style={{ margin: '0'}}>{parse(post.title)}</h3>
        {/* <div className="lees-verder-chevron">
          <Link className="blog-link-detail" to={`/blog${post.uri}`}>
            Lees verder
          </Link>
          <FiChevronRight />
        </div> */}
        <button className="lees-verder-button">
          <Link className="lees-verder-link" to={`/blog${ post.uri }`}>
            Lees verder
          </Link>
        </button>
      </BlogText>
    </BlogWrapper>
  )
}

export default BlogPreview

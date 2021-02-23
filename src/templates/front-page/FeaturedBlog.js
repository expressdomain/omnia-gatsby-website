import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { getFeaturedImageUrl } from '../../utils/functions'
// import blog_placeholder from '..//images/featured_blog_placeholder.png'
import blog_placeholder from '../../images/featured_blog_placeholder.png'

const BlogInnerWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-image: url(${blog_placeholder});
  width: 663px;
  height: 515px;
  background-repeat: no-repeat;
`

const BlogItem = styled.div`
  position: relative;
  top: -10%;
  left: 70%;
  max-width: 550px;
`

// const BlogBackground12 = styled.div`
//   /* background-image: url(${blog_placeholder}); */
//   /* background-image: ${prop => prop.url ? url('../images/featured_blog_placeholder.png') : 'lightgray'}; */
// `

// const BlogBackground = styled.div`
//   background-image: url(${blog_placeholder});
//   width: 663px;
//   height: 515px;
//   background-repeat: no-repeat;
// `;

// const BlogBackground = styled.div`
//   background-image: url(${blog_placeholder}) no-repeat top;
//   width: 663px;
//   height: 515px;
// `;

const FeaturedBlog = () => {
  const { wpPost } = useStaticQuery(graphql`
    query FeaturedBlogQuery {
      wpPost(categories: { nodes: { elemMatch: { name: { eq: "Featured" } } } }) {
        uri
        slug
        title
        excerpt
        featuredImage {
          node {
            localFile {
              url
            }
          }
        }
      }
    }
  `)

  const backgroundImage = (`${wpPost.featuredImage?.node?.localFile?.url}`)
  console.log(backgroundImage)

  return (
    <>
      {wpPost !== null ? (
        <BlogInnerWrapper className="blog-inner-wrapper">
          <img src={blog_icon} alt="blog-icon" className="featured-blog-icon" />
          {/* <img
            src={getFeaturedImageUrl(wpPost.featuredImage?.node?.localFile?.url)}
            alt="featured-blog"
          /> */}
          <BlogItem className="blog-item">
            <div className="featured-title">{parse(wpPost.title)}</div>
            <div className="featured-excerpt">{parse(wpPost.excerpt)}</div>
            <button className="lees-verder-button">
              <Link className="lees-verder-link" to={wpPost.uri}>
                Lees verder
              </Link>
            </button>
          </BlogItem>
          {/* <BlogBackground className="blog-background"/> */}
        </BlogInnerWrapper>
      ) : (
        <pre style={{ color: 'darkred' }}>No featured blog item found.</pre>
      )}
    </>
  )
}

export default FeaturedBlog

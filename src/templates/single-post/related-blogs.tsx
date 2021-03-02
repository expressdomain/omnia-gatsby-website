import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import parse from 'html-react-parser'
import blog_icon from '../../images/blog_icon.png'
import { getFeaturedImageUrl } from '../../utils/functions'
import BlogPreview from '../../components/blog-preview'

const RelatedBlogWrapper = styled.div`
  /* display: flex;
  flex-flow: column; */
  background-color: hsl(264, 71%, 43%);
  border-radius: 5px;
  /* margin-bottom: 200px; */
  display: grid;
  margin-bottom: 630px;
`

const RelatedBlogInner = styled.div`
  margin: 4rem 7.375rem 10rem;
  display: flex;
  flex-flow: row;
`

const BlogInnerContainer = styled.div`
  /* display: flex;
  flex-flow: row; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 2rem;
`

const BlogItem = styled.div`
  max-width: 550px;
  margin-left: 48px;
  margin-top: 100px;
`

const RelatedBlogs = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query OTHER_POSTS {
      allWpPost(limit: 4) {
        nodes {
          id
          title
          uri
          slug
          blogPreview {
            blogPreview
          }
          featuredImage {
            node {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {allWpPost !== null ? (
        <RelatedBlogWrapper className="related-blog-wrapper">
          <div
            style={{
              margin: `4rem 7.375rem 10rem`,
              display: `grid`,
              gridTemplateColumns: `1fr`,
              gridTemplateRows: `180px 70px`,
            }}
          >
            <div style={{ display: `flex`, flexFlow: `row` }}>
              <h2 className="related-blog-header">
                Dit vindt je misschien <br /> ook interessant
              </h2>
              <img src={blog_icon} alt="blog-icon" className="related-blog-icon" />
            </div>
            <BlogInnerContainer className="blog-inner-container">
              {allWpPost !== undefined || null ? (
                allWpPost.nodes.map((post) => <BlogPreview post={post} />)
              ) : (
                <pre style={{ color: 'white' }}>No related blog items found.</pre>
              )}
            </BlogInnerContainer>
          </div>
        </RelatedBlogWrapper>
      ) : (
        <pre style={{ color: 'darkred' }}>This component has not loaded succesfully.</pre>
      )}
    </>
  )
}

export default RelatedBlogs

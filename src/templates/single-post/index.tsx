import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import RelatedBlogs from './related-blogs'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const BlogWrapper = styled.div`
  /* margin: 0 auto;
  max-width: 1060px; */
`

const BlogHeaderWrapper = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  @media only screen and (max-width: 480px) {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

const BlogHeader = styled.div`
  color: white;
  @media only screen and (min-width: 481px) {
    max-width: 920px;
    margin: 0 auto;
    height: 440px;
    padding: 1rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`

const BlogInnerHeader = styled.div`
  display: flex;
  margin-top: 2rem;
  @media only screen and (max-width: 480px) {
    flex-flow: column;
  }
`

const BlogContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 481px) {
    margin-top: 12.5rem;
    max-width: 60%;
    margin-bottom: 10%;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 2rem;
    max-width: 80%;
  }
`

const BlogText = styled.div`
  @media only screen and (max-width: 480px) {
    max-width: 80%;
    margin: 1rem auto;
  }
`

const SinglePostTemplate = (props) => {
  const {
    pageContext: { title, blogPreview, content, featuredImage, seo, uri, id },
  } = props

  const featuredImageSrc = {
    img: featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: featuredImage?.node?.altText || `featured-image`,
  }

  return (
    <Layout>
      {props.pageContext ? (
        <BlogWrapper>
          <BlogHeaderWrapper>
            <BlogHeader>
              <h2 className="blog-detail-header">{parse(title)}</h2>
              <BlogInnerHeader className="blog-inner-header">
                {featuredImageSrc !== undefined || null ? (
                  <GatsbyImage
                    image={featuredImageSrc.img}
                    alt={featuredImageSrc.alt}
                    className="blog-detail-image"
                  />
                ) : (
                  <StaticImage
                    src="../../images/featured_blog_placeholder.png"
                    alt="placeholder"
                    className="blog-detail-image"
                  />
                )}
                {blogPreview.blogPreview !== null ? (
                  <BlogText>
                    <p className="blog-detail-toptext">{parse(blogPreview.blogPreview)}</p>
                  </BlogText>
                ) : (
                  <pre>No body found</pre>
                )}
              </BlogInnerHeader>
            </BlogHeader>
          </BlogHeaderWrapper>
          <BlogContentContainer>
            {content !== null ? <p>{parse(content)}</p> : <pre>No body found</pre>}
          </BlogContentContainer>
          <RelatedBlogs currentBlog={id} />
        </BlogWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default SinglePostTemplate

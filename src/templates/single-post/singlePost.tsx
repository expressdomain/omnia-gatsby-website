import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import RelatedBlogs from './related-blogs/relatedBlogs'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import AutoHelmet from '../../components/helmet'
import * as S from './singlePostStyles'
import * as global from '../../constants/globalConstants'

const NO_BODY = 'Geen hoofdtekst gevonden'

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
        <>
          <AutoHelmet title={title} />
          <S.BlogWrapper>
            <S.BlogHeaderWrapper>
              <S.BlogHeader>
                <h2 className="blog-detail-header">{parse(title)}</h2>
                <S.BlogInnerHeader className="blog-inner-header">
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
                    <S.BlogText>
                      <p className="blog-detail-toptext">{parse(blogPreview.blogPreview)}</p>
                    </S.BlogText>
                  ) : (
                    <pre>{NO_BODY}</pre>
                  )}
                </S.BlogInnerHeader>
              </S.BlogHeader>
            </S.BlogHeaderWrapper>
            <S.BlogContentContainer>
              {content !== null ? <div>{parse(content)}</div> : <pre>{NO_BODY}</pre>}
            </S.BlogContentContainer>
            <RelatedBlogs currentBlog={id} />
          </S.BlogWrapper>
        </>
      ) : (
        <div>{global.SOMETHING_WRONG}</div>
      )}
    </Layout>
  )
}
export default SinglePostTemplate

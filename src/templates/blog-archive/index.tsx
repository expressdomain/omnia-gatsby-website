import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import { getFeaturedImageUrl } from '../../utils/functions'
import BlogPreview from '../../components/blog-preview'
import blog_icon from '../../images/blog_icon.png'
import ReactPaginate from 'react-paginate';

const BlogWrapper = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  height: 440px;
  margin-bottom: 120%;
`

const BlogOverviewHeaderContainer = styled.div`
  /* background-color: hsl(247, 69%, 15%); */
  border-radius: 5px;
  margin-top: 10%;
  @media only screen and (max-width: 414px) {
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

const BlogOverviewHeaderInner = styled.div`
  padding: 3rem 7.375rem;
  @media only screen and (max-width: 414px) {
    padding: 1.125rem 3.062rem;
  }
`

const BlogContainer = styled.div`
  max-width: 990px;
  margin: 0 auto;
  @media only screen and (max-width: 414px) {
    margin: 0 2rem;
  }
`

const BlogInnerContainer = styled.div`
  display: grid;
  @media only screen and (min-width: 416px) {
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 2.25rem;
    grid-row-gap: 3.75rem;
  }
  @media only screen and (max-width: 414px) {
    grid-template-rows: auto;
    grid-row-gap: 2.5rem;
  }
`


const BlogArchive = (props) => {
  const [offset, setOffset] = React.useState(0)
  const [pageCount, setPageCount] = React.useState(0)
  
  const BLOG_PER_PAGE = 6
  
  const {
    pageContext: {
      page: { blogOverviewACF },
      allPosts,
    },
  } = props

  React.useEffect(() => {
    setPageCount(Math.ceil(allPosts.length / BLOG_PER_PAGE))
    console.log('$$Pagecount set')
  }, [])

  const BlogItems = (allPosts) => {

    console.log('blog items created', allPosts.data.length)
    if (allPosts !== undefined || null) {
      return (
        allPosts.data.map((post) =>
          <BlogPreview key={`${ post.id }`} post={post} />
        )
      )
    }
  }
  
  // console.log(allPosts)

  const handlePageClick = (allPosts) => {
    let selected = allPosts.selected;
    let offset = Math.ceil(selected * BLOG_PER_PAGE);

    setOffset(offset)

    // this.setState({ offset: offset }, () => {
    //   this.loadCommentsFromServer();
    // });
  };

  return (
    <Layout>
      {props.pageContext ? (
        <BlogWrapper>
          <BlogOverviewHeaderContainer>
            {/* <img src={blog_icon} alt="blog-icon" className="related-blog-icon" /> */}
            <BlogOverviewHeaderInner>
              <h1 className="blog-overview-header">{parse(blogOverviewACF.blogOverviewHeader)}</h1>
            </BlogOverviewHeaderInner>
          </BlogOverviewHeaderContainer>
          <BlogContainer>
            <BlogInnerContainer>
                <BlogItems data={allPosts} />
                <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
            </BlogInnerContainer>
          </BlogContainer>
        </BlogWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default BlogArchive

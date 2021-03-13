import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import BlogPreview from '../../components/blog-preview'
import blog_icon from '../../images/blog_icon.png'
import { slice, concat } from 'lodash'

const BlogWrapper = styled.div`
  /* margin-bottom: 10%; */
`

const BlogOverviewHeaderContainer = styled.div`
  background-color: hsl(247, 69%, 15%);
  border-radius: 5px;
  margin-top: 10%;
  @media only screen and (max-width: 480px) {
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`

const BlogOverviewHeaderInner = styled.div`
  padding: 3rem 7.375rem 15rem;
  @media only screen and (max-width: 480px) {
    padding: 1.125rem 3.062rem;
  }
`

const BlogContainer = styled.div`
  max-width: 990px;
  margin: 0 auto;
  display: grid;
place-items: center;
  @media only screen and (max-width: 480px) {
    margin: 0 2rem;
  }
`

const BlogInnerContainer = styled.div`
  display: grid;
  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 310px);
    grid-column-gap: 2rem;
    grid-row-gap: 3.75rem;
    min-height: calc(100vh - 100px);
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 310px);
    grid-column-gap: 2rem;
    grid-row-gap: 3.75rem;
    min-height: calc(100vh - 100px);
    transform: translateY(-180px);
    max-width: 100%;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 310px;
    grid-template-rows: auto;
    grid-row-gap: 2.5rem;
    margin-bottom: 1rem;
    transform: none;
  }
`
const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  transform: translateY(-80px);
  @media only screen and (max-width: 480px) {
    transform: none;
    padding-bottom: 2rem;
  }
`

const BlogArchive = (props) => {
  const {
    pageContext: {
      page: { blogOverviewACF },
      allPosts,
      categories
    },
  } = props

  const DATA = [...allPosts]
  const LIMIT = 6

  const [showMore, setShowMore] = React.useState(true)
  const [filteredList, setFilteredList] = React.useState(DATA)
  const [baseList, setBaseList] = React.useState(slice(DATA, 0, LIMIT))
  const [index, setIndex] = React.useState(LIMIT)

  const loadMore = () => {
    const newIndex = index + LIMIT
    const newShowMore = newIndex < (filteredList.length + 1) - 1
    const newList = concat(baseList, slice(filteredList, index, newIndex))
    setIndex(newIndex)
    setBaseList(newList)
    setShowMore(newShowMore)
  }

  const filterCategory = (value) => {
    const filterBlogs = DATA.filter((blog) =>
    blog.categories.nodes.map(category => category.id).includes(value)
    )
    const newShowMore = LIMIT < (filteredList.length + 1) - 1
    setIndex(LIMIT)
    setBaseList(slice(filterBlogs, 0, LIMIT))
    setFilteredList(filterBlogs)
    setShowMore(newShowMore)
  }

  return (
    <Layout>
      {props.pageContext ? (
        <BlogWrapper>
          <BlogOverviewHeaderContainer>
            {/* <img src={blog_icon} alt="blog-icon" className="related-blog-icon" /> */}
            <BlogOverviewHeaderInner>
              <h1 className="blog-overview-header">{parse(blogOverviewACF.blogOverviewHeader)}</h1>
              <div style={{display: 'flex'}}>
                {categories.nodes.map((category) => <p onClick={() => filterCategory(category.id)} style={{ color: 'white', marginRight: '8px' }}>{category.name}</p>)}
              </div>
            </BlogOverviewHeaderInner>
          </BlogOverviewHeaderContainer>
          <BlogContainer>
            <BlogInnerContainer>
              {allPosts !== undefined || null ? (
                baseList.map((post) => <BlogPreview post={post} />)
              ) : (
                <pre style={{ color: 'white' }}>No related blog items found.</pre>
              )}
            </BlogInnerContainer>
            <ButtonContainer>
              {showMore && (
                <div className="lees-verder-button" onClick={loadMore}>
                  <span style={{ cursor: 'pointer' }} className="lees-verder-link">
                    Laad meer
                  </span>
                </div>
              )}
            </ButtonContainer>
          </BlogContainer>
        </BlogWrapper>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default BlogArchive

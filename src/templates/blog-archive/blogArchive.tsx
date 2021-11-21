import React, { useState } from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import BlogPreview from '../../components/blog-preview/blogPreview'
import blog_icon from '../../images/blog_icon.png'
import { slice, concat } from 'lodash'
import Category from './category'
import AutoHelmet from '../../components/helmet'
import * as S from './blogArchiveStyles'
import * as global from '../../constants/globalConstants'

const BlogArchive = (props) => {
  const {
    pageContext: {
      page: { title, blogOverviewACF },
      allPosts,
      categories,
    },
  } = props

  const DATA = [...allPosts]
  const LIMIT = 6
  const START_CAT = 'Alles'
  const NO_BLOGS_FOUND = 'Geen gerelateerde blogs gevonden.'

  const [showMore, setShowMore] = useState(DATA.length > 6 ? true : false)
  const [filteredList, setFilteredList] = useState(DATA)
  const [baseList, setBaseList] = useState(slice(DATA, 0, LIMIT))
  const [index, setIndex] = useState(LIMIT)
  const [selected, setSelected] = useState(START_CAT)

  const loadMore = () => {
    const newIndex = index + LIMIT
    const newShowMore = newIndex < filteredList.length + 1 - 1
    const newList = concat(baseList, slice(filteredList, index, newIndex))
    setIndex(newIndex)
    setBaseList(newList)
    setShowMore(newShowMore)
  }

  const filterCategory = (category) => {
    const filterBlogs = DATA.filter((blog) =>
      blog.categories.nodes.map((category) => category.id).includes(category.id)
    )
    const newShowMore = LIMIT < filterBlogs.length + 1 - 1
    setIndex(LIMIT)
    setBaseList(slice(filterBlogs, 0, LIMIT))
    setFilteredList(filterBlogs)
    setShowMore(newShowMore)
  }

  const filteredCategories = props.pageContext?.categories.nodes.filter(
    (data) => data.name != 'Featured' && data.name != 'Geen categorie'
  )

  const sortedCategories = filteredCategories.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase()

    if (fa < fb) {
      return -1
    }
    if (fa > fb) {
      return 1
    }
    return 0
  })

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <AutoHelmet title={title} />
          <S.BlogWrapper>
            <S.BlogOverviewHeaderContainer>
              {/* <img src={blog_icon} alt="blog-icon" className="related-blog-icon" /> */}
              <S.BlogOverviewHeaderInner>
                <h1 className="blog-overview-header">
                  {parse(blogOverviewACF.blogOverviewHeader)}
                </h1>
                <S.OptionsContainer>
                  {sortedCategories &&
                    sortedCategories.map((category) => (
                      <div key={category.id} onClick={() => filterCategory(category)}>
                        <div onClick={() => setSelected(category.name)}>
                          <Category catData={category} selected={selected} />
                        </div>
                      </div>
                    ))}
                </S.OptionsContainer>
              </S.BlogOverviewHeaderInner>
            </S.BlogOverviewHeaderContainer>
            <S.BlogContainer>
              <S.BlogInnerContainer>
                {allPosts !== undefined || null ? (
                  baseList.length > 0 ? (
                    baseList.map((post) => <BlogPreview key={post.id} post={post} />)
                  ) : (
                    <pre style={{ color: 'white' }}>{NO_BLOGS_FOUND}</pre>
                  )
                ) : (
                  <pre style={{ color: 'white' }}>{NO_BLOGS_FOUND}</pre>
                )}
              </S.BlogInnerContainer>
              <S.ButtonContainer>
                {showMore && (
                  <div className="lees-verder-button" onClick={loadMore}>
                    <span style={{ cursor: 'pointer' }} className="lees-verder-link">
                      {global.LAAD_MEER}
                    </span>
                  </div>
                )}
              </S.ButtonContainer>
            </S.BlogContainer>
          </S.BlogWrapper>
        </>
      ) : (
        <div>{NO_BLOGS_FOUND}</div>
      )}
    </Layout>
  )
}

export default BlogArchive

import styled from '@emotion/styled'

export const RelatedBlogWrapper = styled.div`
  border-radius: 5px;
`

export const DesktopWrapper = styled.div`
  @media only screen and (max-width: 1026px) {
    display: none;
  }
`

export const TabletWrapper = styled.div`
  @media only screen and (min-width: 1025px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

export const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

export const RelatedBlogHeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  background-color: hsl(264, 71%, 43%);
  border-radius: 5px;
`

export const RelatedBlogInnerHeader = styled.div`
  padding: 3rem 7.375rem 10rem;

  @media only screen and (max-width: 768px) {
    padding: 3rem 1.375rem 10rem;
  }
`

export const RelatedBlogInner = styled.div`
  margin: 4rem 7.375rem 10rem;
  display: flex;
  flex-flow: row;
`

export const BlogContainer = styled.div`
  /* margin: 4rem 7.375rem 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 70px; */
`

export const BlogInnerContainer = styled.div`
  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(3, 310px);
    grid-column-gap: 2rem;
    transform: translateY(-230px);
    max-width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 310px);
    grid-column-gap: 2rem;
    transform: translateY(-230px);
    max-width: 100%;
  }
  @media only screen and (max-width: 481px) {
    display: initial;
  }
`

export const BlogItem = styled.div`
  max-width: 550px;
  margin-left: 48px;
  margin-top: 100px;
`
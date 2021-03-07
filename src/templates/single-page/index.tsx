import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import styled from '@emotion/styled'
import FeaturedBlog from '../front-page/featured-blog'
import { GatsbyImage } from 'gatsby-plugin-image'

// const OverWrapper = styled.div`
//   margin-bottom: 10%;
// `

// const DesktopWrapper = styled.div`
//   @media only screen and (max-width: 414px) {
//     display: none;
//   }
// `

// const MobileWrapper = styled.div`
//   @media only screen and (min-width: 416px) {
//     display: none;
//   }
// `

// const OverHeaderWrapper = styled.div`
//   @media only screen and (min-width: 416px) {
//     border-radius: 5px;
//     margin-top: 10%;
//   }
//   @media only screen and (min-width: 416px) {
//     background-color: hsl(247, 69%, 15%);
//   }
// `

// const OverHeader = styled.div`
//   color: white;
//   /* max-width: 920px; */
//   margin: 0 auto;
//   /* padding: 1rem; */
//   display: flex;
//   flex-flow: row;
//   padding-top: 2rem;
//   @media only screen and (max-width: 414px) {
//     flex-flow: column;
//     padding: 0 3rem;
//   }
// `

// const OverInnerHeader = styled.div`
//   margin-left: 2.3rem;
//   max-width: 540px;
//   @media only screen and (max-width: 414px) {
//     margin: 1rem 3rem;
//   }
// `

// const HeroMobileContainer = styled.div`
//   margin: 0 -3rem;
//   display: flex;
//   place-content: center;
//   background-color: hsl(247, 69%, 15%);
// `

// const OverContentContainer = styled.div`
//   display: flex;
//   place-content: center;
// `

// const OverContentInnerContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: 2rem;
//   grid-row-gap: 2rem;
//   margin-top: 10%;
//   @media only screen and (max-width: 414px) {
//     margin: 5% 5%;
//     grid-template-columns: 1fr;
//   }
// `

// const OverContentItem = styled.div`
//   display: flex;
//   flex-flow: row;
//   align-items: center;
// `

// const OverInnerContent = styled.div`
//   display: flex;
//   flex-flow: column;
//   margin-left: 1.5rem;
// `

const PageTemplate = (props) => {
  const {
    pageContext: {
      page: { title, content, uri, overACF },
    },
  } = props

  console.log(props)

  // const bierImage = {
  //   img: overACF.bierImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: overACF.bierImage?.alt || `bierImage`,
  // }

  // const dnaImage = {
  //   img: overACF.dnaImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: overACF.dnaImage?.alt || `dnaImage`,
  // }

  // const gbImage = {
  //   img: overACF.gbImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: overACF.gbImage?.alt || `groningseBrabanderImage`,
  // }

  // const kennisProjectervaringImage = {
  //   img: overACF.kennisProjectervaringImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: overACF.kennisProjectervaringImage?.alt || `kennisProjectervaringImage`,
  // }

  // const overHeroImage = {
  //   img: overACF.overHeroImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: overACF.overHeroImage?.alt || `overHeroImage`,
  // }

  // const werkgeversWerkervaringImage = {
  //   img: overACF.werkgeversWerkervaringImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: overACF.werkgeversWerkervaringImage?.alt || `werkgeversWerkervaringImage`,
  // }

  return (
    <Layout>
      {props.pageContext ? (
        <>
          <h1>{parse(title)}</h1>
          <p>{parse(content)}</p>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default PageTemplate

import { graphql } from "gatsby"

export const contentFragments = graphql`
    fragment homepageACF on WpPage {
        heroHeader
        heroSubHeader
        heroSubtext
        servicesContent
        servicesContent1
        servicesHeader
        servicesImage {
            sourceUrl
        }
        uspHeader
    }
`
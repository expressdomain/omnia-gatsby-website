const { slash } = require( `gatsby-core-utils` );
const overTemplate = require.resolve( `../src/templates/over/over.tsx` );

// Get all the about page data.
const GET_OVER_PAGE = `
query GET_OVER_PAGE {
  page: wpPage(slug: {eq: "over-omnia"}) {
    id
    title
    uri
    content
    overACF {
      bierBody
      bierHeader
      dnaBody
      dnaHeader
      bierImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      dnaImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      gbBody
      gbHeader
      gbImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      kennisProjectervaringBody
      kennisProjectervaringHeader
      kennisProjectervaringImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      overHeroBody
      overHeroHeader
      overHeroImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      werkgeversWerkervaringBody
      werkgeversWerkervaringHeader
      werkgeversWerkervaringImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get services page data.
		return await graphql( GET_OVER_PAGE )
			.then(({ data }) => {
				
                const { page } = data;
                
				return {  page: page };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {
		createPage( {
			path: page.uri,
			component: slash( overTemplate ),
			context: {
				page
			},
		},
		);
	} )

};
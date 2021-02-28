const { slash }         = require( `gatsby-core-utils` );
const overTemplate = require.resolve( `../src/templates/over/index.tsx` );
// const { SeoFragment } = require('./fragments/seo/index.js');

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
        localFile {
          url
        }
      }
      dnaImage {
        localFile {
          url
        }
      }
      gbBody
      gbHeader
      gbImage {
        localFile {
          url
        }
      }
      kennisProjectervaringBody
      kennisProjectervaringHeader
      kennisProjectervaringImage {
        localFile {
          url
        }
      }
      overHeroBody
      overHeroHeader
      overHeroImage {
        localFile {
          url
        }
      }
      werkgeversWerkervaringBody
      werkgeversWerkervaringHeader
      werkgeversWerkervaringImage {
        localFile {
          url
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
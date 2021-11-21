const { slash }         = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve( `../src/templates/front-page/frontPage.tsx` );
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');


// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page: wpPage(slug: {eq: "homepage"}) {
    id
    title
    uri
    homepageACF {
      heroHeader
      heroSubtext
      heroSubHeader
      servicesContent
      servicesContent1
      servicesHeader
      uspHeader
      servicesImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      heroImage {
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

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
      .then(({ data }) => {
				
                const { page } = data;
                
				return { page };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {
		createPage( {
			// path: `/`,
			path: page.uri,
			component: slash( frontPageTemplate ),
			context: {
				page
			},
		},
		);
	} )

};
const { slash }         = require( `gatsby-core-utils` );
const contactTemplate = require.resolve( `../src/templates/contact/index.tsx` );
// const singleProductPageTemplate = require.resolve( `../src/templates/product/index.js` );
// const { ProductsFragment } = require('./fragments/products/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');
// const { HomepageFragment } = require('./fragments/pages/index.js');

// Get all the front page data.
const GET_CONTACT_PAGE = `
query GET_CONTACT_PAGE {
  page: wpPage(slug: {eq: "contact"}) {
    id
    title
    uri
	content
	contactACF {
		contactHeader
		contactGmaps {
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

		// Do query to get home page data.
		return await graphql( GET_CONTACT_PAGE )
			.then(({ data }) => {
				
                const { page } = data;
                
				return {  page: page };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {
		createPage( {
			path: page.uri,
			component: slash( contactTemplate ),
			context: {
				page
			},
		},
		);
	} )

};
const { slash }         = require( `gatsby-core-utils` );
const contactTemplate = require.resolve( `../src/templates/contact/index.tsx` );
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the contact page data.
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
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      email
      kamerVanKoophandel
      linkedin
      personName
      street
      telephone
      zipCity
      companyName
      btwNummer
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
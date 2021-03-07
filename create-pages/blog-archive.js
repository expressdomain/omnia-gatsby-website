const { slash }         = require( `gatsby-core-utils` );
const blogArchiveTemplate = require.resolve(`../src/templates/blog-archive/index.tsx`);
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the blog page data.
const GET_BLOG_PAGE = `
query GET_BLOG_PAGE {
  page: wpPage(slug: {eq: "blog"}) {
    id
    title
    uri
    content
    blogOverviewACF {
      blogOverviewHeader
    }
  }
  posts: allWpPost(limit: 5000) {
    nodes {
      id
      title
      content
      date
      uri
      slug
      blogPreview {
        blogPreview
      }
      featuredImage {
        node {
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
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get blog page data.
		return await graphql( GET_BLOG_PAGE )
			.then(({ data }) => {
				
                const { page, posts } = data;

				let allThePosts = [];
				posts && posts.nodes.map( post => {
				
					allThePosts.push(post);
				} );
				return { page: page, allPosts: allThePosts };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page, allPosts } ) => {
		createPage( {
			path: `/blog/`,
			component: slash( blogArchiveTemplate ),
			context: {
				page,
				allPosts
			},
		},
		);
	} )

};
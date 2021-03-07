const { slash } = require( `gatsby-core-utils` );
const singlePostTemplate = require.resolve(`../src/templates/single-post/index.tsx`);
// const { ImageFragment } = require('./fragments/image/index.js');

// Get all the posts.
const GET_POSTS = `
query GET_POSTS {
  posts: allWpPost(limit: 5000) {
    nodes {
      id
      title
      uri
      content
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
`

module.exports = async ( { actions, graphql } ) => {

    const { createPage } = actions;

    const fetchPosts = async () => {

        // Do query to get all posts, this will return the posts and pages.
        return await graphql( GET_POSTS )
            .then( ( { data } ) => {

                const { posts } = data;

                return { posts: posts.nodes };
            } );
    };

    // When the above fetchPosts is resolved, then loop through the results i.e posts to create single post pages.
    await fetchPosts().then( ( { posts } ) => {

        // 2. Create Single POST PAGE: Loop through all pages and create single page for post.
        posts &&
        posts.map( ( post ) => {
            createPage( {
                path: `/blog${ post.uri }`,
                component: slash( singlePostTemplate ),
                context: { ...post }, // pass single page data in context, so its available in the singlePostTemplate in props.pageContext.
            } );
        } );

    } )

};

const ImageFragment = `
fragment ImageFragment on WpMediaItem {
	altText
	localFile {
		childImageSharp {
		gatsbyImageData
		}
	}
}
`;

module.exports.ImageFragment = ImageFragment;

const SeoFragment = `
fragment SeoFragment on WpPage {
      canonical
      title
      metaDesc
      focuskw
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphAuthor
      opengraphDescription
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
      opengraphUrl
      opengraphSiteName
      opengraphPublishedTime
      opengraphModifiedTime
}
`;

module.exports.SeoFragment = SeoFragment;

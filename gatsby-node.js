exports.createPages = ({ graphql, actions }) => {
  // NOTE: Gatsby-mdx automatically creates pages for us from the mdx files. Leaving the old remark content for now
  // const { createPage } = actions
  // return new Promise((resolve, reject) => {
  //   const markdownPage = path.resolve('./src/templates/markdownPage.js')
  //   resolve(
  //     graphql(
  //       `
  //         {
  //           allMarkdownRemark(limit: 1000) {
  //             edges {
  //               node {
  //                 fields {
  //                   slug
  //                 }
  //                 frontmatter {
  //                   title
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `
  //     ).then(result => {
  //       if (result.errors) {
  //         console.log(result.errors)
  //         reject(result.errors)
  //       }
  //       // Create blog posts pages.
  //       const pages = result.data.allMarkdownRemark.edges
  //       pages.forEach((page) => {
  //         createPage({
  //           path: page.node.fields.slug,
  //           component: markdownPage,
  //           context: {
  //             slug: page.node.fields.slug
  //           }
  //         })
  //       })
  //     })
  //   )
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  // const { createNodeField } = actions
  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value,
  //   })
  // }
}

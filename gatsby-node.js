exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type IntervenantsJson implements Node {
      photo: File @link(by: "relativePath")
    }

    type PartenairesJson implements Node {
        photo: File @link(by: "relativePath")
      }
    `
    createTypes(typeDefs)
}
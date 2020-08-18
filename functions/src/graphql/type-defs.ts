const { mergeTypeDefs } = require('@graphql-tools/merge')
const { userTypes } = require('./user/type-defs')

const typeDefs = mergeTypeDefs([
  userTypes,
])

export { typeDefs }

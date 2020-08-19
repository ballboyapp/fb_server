const { mergeTypeDefs } = require('@graphql-tools/merge')
const { userTypes } = require('./user/type-defs')
const { cityTypes } = require('./city/type-defs')

const typeDefs = mergeTypeDefs([
  userTypes,
  cityTypes,
])

export { typeDefs }

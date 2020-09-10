const { mergeTypeDefs } = require('@graphql-tools/merge')
const { meTypes } = require('./me/type-defs')
const { cityTypes } = require('./city/type-defs')

const typeDefs = mergeTypeDefs([
  meTypes,
  cityTypes,
])

export { typeDefs }

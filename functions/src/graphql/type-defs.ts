import { mergeTypeDefs } from '@graphql-tools/merge'
import { userTypes } from './user/type-defs'
import { cityTypes } from './city/type-defs'

const typeDefs = mergeTypeDefs([
  userTypes,
  cityTypes,
])

export { typeDefs }

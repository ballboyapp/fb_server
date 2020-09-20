import { mergeTypeDefs } from '@graphql-tools/merge'
import { userTypes } from './user/type-defs'
import { cityTypes } from './city/type-defs'

export const typeDefs = mergeTypeDefs([
  userTypes,
  cityTypes,
])

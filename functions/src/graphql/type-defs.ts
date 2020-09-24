import { mergeTypeDefs } from '@graphql-tools/merge'
import { commonTypes } from './common/type-defs'
import { cityTypes } from './city/type-defs'
import { spotTypes } from './spot/type-defs'
import { userTypes } from './user/type-defs'

export const typeDefs = mergeTypeDefs([
  commonTypes,
  cityTypes,
  spotTypes,
  userTypes,
])

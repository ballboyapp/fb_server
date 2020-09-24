import { mergeResolvers } from '@graphql-tools/merge'
import { userResolvers } from './user/resolvers'
import { cityResolvers } from './city/resolvers'
import { spotResolvers } from './spot/resolvers'

export const resolvers = mergeResolvers([
  userResolvers,
  cityResolvers,
  spotResolvers,
])

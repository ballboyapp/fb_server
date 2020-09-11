import { mergeResolvers } from '@graphql-tools/merge'
import { userResolvers } from './user/resolvers'
import { cityResolvers } from './city/resolvers'

const resolvers = mergeResolvers([
  userResolvers,
  cityResolvers,
])

export { resolvers }

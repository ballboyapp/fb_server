import { mergeResolvers } from '@graphql-tools/merge'
import { meResolvers } from './me/resolvers'
import { cityResolvers } from './city/resolvers'

const resolvers = mergeResolvers([
  meResolvers,
  cityResolvers,
])

export { resolvers }

import { User } from './user'
import { Query } from './query'
import { Mutation } from './mutation'

const userResolvers = {
  PrivateUser: User,
  // PublicUser: User,
  Query,
  Mutation,
}

export { userResolvers }

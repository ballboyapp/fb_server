// See: https://github.com/graphql/graphql-js/issues/703
const meTypes = `
  # ENUMS

  # TYPES

  type UserProfile {
    id: ID!
    username: String
    avatar: String
    language: String #Language
    city: String
    country: String
  }

  type Me {
    id: ID!
    #createdAt: Date // TODO: timestamp
    email: String
    profile: UserProfile
  }

  #type User {
  #  id: ID!
  #  profile: UserProfile
  #}

  # INPUTS

  # QUERIES

  type Query {
    me: Me
  }

  # MUTATIONS

  type Mutation {
    setMe(language: String!): Me

    updateMe(
      username: String,
      city: String,
      country: String,
    ): Me

    # TODO: deleteMe
  }
`

export { meTypes }

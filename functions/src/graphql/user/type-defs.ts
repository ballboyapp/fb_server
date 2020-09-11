// See: https://github.com/graphql/graphql-js/issues/703
const userTypes = `
  # ENUMS

  # TYPES

  type Profile {
    id: ID!
    username: String
    avatar: String
    language: String #Language
    city: String
    country: String
  }

  type User {
    id: ID!
    profile: Profile
  }

  type Me {
    id: ID!
    #createdAt: Date // TODO: creationTime
    email: String
    profile: Profile
  }

  # INPUTS

  # QUERIES

  type Query {
    me: Me
  }

  # MUTATIONS

  type Mutation {
    createMe(language: String!): Me

    updateMe(
      username: String,
      city: String,
      country: String,
    ): Me

    # TODO: deleteMe
  }
`

export { userTypes }

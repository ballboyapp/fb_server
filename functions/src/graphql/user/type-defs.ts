// See: https://github.com/graphql/graphql-js/issues/703
export const userTypes = `
  # ENUMS

  # TYPES

  type Profile {
    id: ID!
    username: String
    avatar: String
    language: String
    cityId: ID!
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
    # TODO: pass cityId
    createMe(language: String!): Me

    updateMe(
      username: String,
      cityId: String,
    ): Me

    # TODO: deleteMe
  }
`

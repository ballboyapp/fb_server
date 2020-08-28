// See: https://github.com/graphql/graphql-js/issues/703
const userTypes = `
  # ENUMS

  # TYPES

  type UserProfile {
    id: ID!
    username: String
    avatar: String
    #birthdate: Date
    #gender: Gender
    language: String #Language
    city: String
    country: String
  }

  type PrivateUser { # TODO: change name to 'Me'
    id: ID!
    #createdAt: Date
    email: String
    profile: UserProfile
    #formattedAddress: String
    #location: Point
  }

  type PublicUser { # TODO: change name to 'User'
    id: ID!
    profile: UserProfile
  }

  # INPUTS

  # QUERIES

  type Query {
    getMe: PrivateUser
    #publicUser(_id: ID!): PublicUser
    #publicUsers(_ids: [ID!]): [PublicUser]
  }

  # MUTATIONS

  type Mutation {
    #signup(language: Language!): PrivateUser
    setMe(language: String!): PrivateUser

    updateMe(
      username: String,
      city: String,
      country: String,
    ): PrivateUser

    # TODO: delete user
  }
`

export { userTypes }

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
    language: Language
    city: String
    country: String
  }

  type PrivateUser {
    id: ID!
    createdAt: Date
    email: String
    profile: UserProfile
    #formattedAddress: String
    #location: Point
  }

  type PublicUser {
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
    #signup(
    #  username: String!,
    #  email: String!,
    #  language: Language!,
    #): PrivateUser

    #login(email: String!): PrivateUser

    # sendPasscode(email: String!): PrivateUser

    #validatePasscode(email: String!, passcode: String!): AuthToken

    updateMe(
      username: String,
      gender: String,
      avatar: String,
      city: String,
      country: String,
      #formattedAddress: String,
      #coordinates: [Float],
    ): PrivateUser

    # TODO: delete user
  }
`

export { userTypes }

// See: https://github.com/graphql/graphql-js/issues/703
const cityTypes = `
  # ENUMS

  # TYPES

  type City {
    id: ID!
    name: String
    country: String
    #formattedAddress: String
    #location: Point
  }

  # INPUTS

  # QUERIES

  type Query {
    getCities: [City]
  }

  # MUTATIONS

`

export { cityTypes }

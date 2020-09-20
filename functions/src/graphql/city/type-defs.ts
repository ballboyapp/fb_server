// See: https://github.com/graphql/graphql-js/issues/703
export const cityTypes = `
  # ENUMS

  # TYPES

  type City {
    id: ID!
    name: String
    country: String
  }

  # INPUTS

  # QUERIES

  type Query {
    cities: [City]
  }

  # MUTATIONS

`

// See: https://github.com/graphql/graphql-js/issues/703
export const spotTypes = `
  # ENUMS

  # TYPES

  type Spot {
    id: ID!
    cityId: ID!
    spotname: String
    address: String
    coordinates: Coordinates
    images: [String]
    sports: [Sport]
    #activities(limit: Int!, offset: Int!): [Activity]
  }

  # INPUTS
  # TODO: add spotsInput and spotDetailsInput

  # QUERIES

  type Query {
    spots(
      cityId: ID!,
      sports: [Sport],
      limit: Int!,
      offset: Int!,
    ): [Spot]

    spotDetails(id: ID!): Spot
  }

  # MUTATIONS

`

export const commonTypes = `
  # SCALARS

  scalar Date

  # ENUMS

  enum Language {
    en
    es
    nl
  }

  enum Sport {
    FOOTBALL
    VOLLEYBALL
    BEACH_VOLLEYBALL
    TENNIS
    TABLE_TENNIS
    ABSOLUTE_FRISBEE
    BASKETBALL
    BADMINTON
  }

  # TYPES

  type Coordinates {
    lat: Float!
    lng: Float!
  }

  #type DateRange {
  #  startDate: Date
  #  endDate: Date
  #}

  # INPUTS

  #input DateRangeInput {
  #  startDate: String!
  #  endDate: String!
  #}
`

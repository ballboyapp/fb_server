// See: https://github.com/graphql/graphql-js/issues/703
export const activityTypes = `
  # ENUMS

  enum ActivityStatus {
    ACTIVE
    CANCELED
    FINISHED
    DELETED
  }

  enum RespondentStatus {
    ATTENDING
    DECLINED
  }

  # TYPES

  type Activity {
    id: ID!
    organizer: User
    isOrganizer: Boolean
    spot: Spot
    sport: Sport
    dateTime: Date
    duration: Int
    title: String
    description: String
    status: ActivityStatus
    capacity: Int
    #shareLink: String
    #chatRoomId: String
    attendeesIds: [ID]!
    attendees: [User]
    isAttendee: Boolean
    #distance: Float # meters
    repeatFrequency: Int # weeks. 0 means do not repeat
  }

  # INPUTS

  # QUERIES

  type Query {
    activities(
      sports: [Sport],
      offset: Int!,
      limit: Int!,
    ): [Activity]

    activityDetails(
      id: ID!,
    ): Activity
  }

  # MUTATIONS

  type Mutation {
    createActivity(
      sport: Sport!,
      dateTime: String!,
      duration: Int,
      capacity: Int,
      spotId: ID!,
      title: String!,
      description: String,
      repeatFrequency: Int,
    ): Activity

    #updateActivity(
    #  id: ID!,
    #  dateTime: String!,
    #  duration: Int,
    #  capacity: Int,
    #  spotId: ID!,
    #  title: String!,
    #  description: String,
    #  repeatFrequency: Int,
    #): Activity

    #cancelActivity(
    #  id: ID!,
    #  msg: String,
    #): Activity

    #deleteActivity

    addAttendee(id: ID!): Activity

    removeAttendee(id: ID!): Activity

    #newMessage(_id: ID!, senderId!): Activity
  }
`

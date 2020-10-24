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
    #isOrganizer: Boolean
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
    #attendeesIds: [ID]
    #attendees: [User]
    #isAttendee: Boolean
    #distance: Float # meters
    repeatFrequency: Int # weeks. 0 means do not repeat
  }

  # INPUTS
  input activitiesInput {
    sports: [Sport]
    #distance: Float
    offset: Int!
    limit: Int!
  }

  input activityDetailsInput {
    id: ID!
  }

  input createActivityInput {
    sport: Sport!
    dateTime: String!
    duration: Int
    capacity: Int
    spotId: ID!
    title: String!
    description: String
    repeatFrequency: Int
  }

  input updateActivityInput {
    id: ID!
    dateTime: String!
    duration: Int
    capacity: Int
    spotId: ID!
    title: String!
    description: String
    repeatFrequency: Int
  }

  input cancelActivityInput {
    id: ID!
    msg: String
  }

  # QUERIES

  type Query {
    activities(args: activitiesInput): [Activity]
    activityDetails(args: activityDetailsInput): Activity
  }

  # MUTATIONS

  type Mutation {
    createActivity(args: createActivityInput): Activity
    #updateActivity(args: updateActivityInput): Activity
    #cancelActivity(args: cancelActivityInput): Activity
    #deleteActivity
    #addAttendee(_id: ID!): Activity
    #removeAttendee(_id: ID!): Activity
    #newMessage(_id: ID!, senderId!): Activity
  }
`

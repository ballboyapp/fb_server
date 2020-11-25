import admin from 'firebase-admin'
import { SPORTS } from './constants'

// https://stackoverflow.com/questions/58200432/argument-of-type-req-request-res-iresponse-next-nextfunction-void-is
// https://github.com/microsoft/TypeScript/issues/7352#issuecomment-191547232
declare module 'express-serve-static-core' {
  interface Request {
    user: admin.auth.DecodedIdToken | null,
  }
}

export type promiseWrite = Promise<admin.firestore.WriteResult>
export type promiseDocReference = Promise<admin.firestore.DocumentReference<admin.firestore.DocumentData>>
export type queryDocData = admin.firestore.QueryDocumentSnapshot<admin.firestore.DocumentData>
export type docData = admin.firestore.DocumentSnapshot<admin.firestore.DocumentData>

export type Sport = keyof typeof SPORTS

export interface Id {
  id: string
}

export interface Profile {
  id: string
  username: string
  avatar: string
  language: string
  cityId: string
}

export interface User extends Id {
  profile?: Profile
}

export interface UserDeatilsInput {
  id: string
}

export interface Me extends User { }

export interface City extends Id {
  name: string
  country: string
}

export interface City extends Id {
  name: string
  country: string
}

export interface Spot extends Id {
  cityId: string
  spotname: string
  address: string
  location: [number, number]
  images: string[]
  sports: Sport[]
  // activities(limit: Int!, offset: Int!): [Activity]
}

export enum ACTIVITY_STATUSES {
  ACTIVE,
  CANCELED,
  FINISHED,
  DELETED,
}

export type ActivityStatus = keyof typeof ACTIVITY_STATUSES

export interface Activity extends Id {
  spotId: string
  organizer: User
  isOrganizer: boolean
  spot: Spot
  sport: Sport
  dateTime: Date
  duration: number
  title: string
  description: string
  status: ActivityStatus
  capacity?: number
  attendeesIds: string[]
  attendees: User[]
  isAttendee: boolean
  repeatFrequency?: number
}

export interface ActivityDetailsInput {
  id: string
}

export interface ActivitiesInput {
  sports?: Sport[]
  offset: number
  limit: number
}

export type promiseUserNull = Promise<User | null>
export type promiseCityNull = Promise<City | null>
export type promiseSpotNull = Promise<Spot | null>
export type promiseActivityNull = Promise<Activity | null>
export type promiseUsers = Promise<(User | null)[]>
export type promiseCities = Promise<(City | null)[]>
export type promiseSpots = Promise<Spot[]>
export type promiseActivities = Promise<(Activity | null)[]>

export interface CtxMe {
  me: Me | null,
}

export type userModel = {
  createMe: (args: object) => promiseWrite, // Use CreateMeInput
  getMe: () => promiseUserNull,
  updateMe: (args: object) => promiseWrite, // use UpdateMeInput
  getUser: (args: UserDeatilsInput) => promiseUserNull,
}

export type cityModel = {
  getCities: () => promiseCities,
}

export interface SpotsInput {
  cityId: string
  sports?: Sport[]
  offset: number
  limit: number
}

export interface SpotDetailsInput {
  id: string
}

export type spotModel = {
  getSpots: (args: SpotsInput) => promiseSpots,
  getSpotDetails: (args: SpotDetailsInput) => promiseSpotNull,
}

export interface CreateActivityInput {
  sport: Sport
  dateTime: Date
  duration: number
  capacity?: number
  spotId: string
  title: string
  description?: string
  repeatFrequency: number
}

export type activityModel = {
  createActivity: (args: CreateActivityInput) => Promise<string | null>,
  getActivities: (args: ActivitiesInput) => promiseActivities,
  getActivityDetails: (args: ActivityDetailsInput) => promiseActivityNull,
}

export interface CtxModels {
  models: {
    User: userModel,
    City: cityModel,
    Spot: spotModel,
    Activity: activityModel,
  },
}

export interface Ctx extends CtxMe, CtxModels { }

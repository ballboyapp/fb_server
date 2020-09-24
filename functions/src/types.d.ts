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

export interface User extends Id { }
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

export type promiseUserNull = Promise<User | null>
export type promiseCityNull = Promise<City | null>
export type promiseSpotNull = Promise<Spot | null>
export type promiseCities = Promise<City[]>
export type promiseSpots = Promise<Spot[]>

export interface CtxMe {
  me: Me | null,
}

export type userModel = {
  createMe: (args: object) => promiseWrite,
  getMe: () => promiseUserNull,
  updateMe: (args: object) => promiseWrite,
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

export interface SpotDeatilsInput {
  id: string
}

export type spotModel = {
  getSpots: (args: SpotsInput) => promiseSpots,
  getSpotDetails: (args: SpotDeatilsInput) => promiseSpotNull,
}

export interface CtxModels {
  models: {
    User: userModel,
    City: cityModel,
    Spot: spotModel,
  },
}

export interface Ctx extends CtxMe, CtxModels { }

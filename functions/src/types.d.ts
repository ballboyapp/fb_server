import admin from 'firebase-admin'

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

export interface Id {
  id: string
}

export interface User extends Id { }
export interface Me extends User { }

export interface City extends Id {
  name: string
  country: string
}

export type promiseUserNull = Promise<User | null>
export type promiseCityNull = Promise<City | null>
export type promiseCities = Promise<City[]>

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

export interface CtxModels {
  models: {
    User: userModel,
    City: cityModel,
  },
}

export interface Ctx extends CtxMe, CtxModels { }

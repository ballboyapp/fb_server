import admin from 'firebase-admin'

// https://stackoverflow.com/questions/58200432/argument-of-type-req-request-res-iresponse-next-nextfunction-void-is
// https://github.com/microsoft/TypeScript/issues/7352#issuecomment-191547232
declare module 'express-serve-static-core' {
  interface Request {
    user: admin.auth.DecodedIdToken | null,
  }
}

type promiseWrite = Promise<admin.firestore.WriteResult>
type promiseDocReference = Promise<admin.firestore.DocumentReference<admin.firestore.DocumentData>>
type queryDocData = admin.firestore.QueryDocumentSnapshot<admin.firestore.DocumentData>
type docData = admin.firestore.DocumentSnapshot<admin.firestore.DocumentData>

interface Id {
  id: string
}

interface User extends Id { }
// TODO: should we use Me as well? interfact Me extends User

interface City extends Id {
  name: string
  country: string
}

type promiseUserNull = Promise<User | null>
type promiseCityNull = Promise<City | null>
type promiseCities = Promise<City[]>

interface CtxMe {
  me: User | null,
}

type userModel = {
  setMe: (args: object) => promiseWrite,
  getMe: () => promiseUserNull,
  updateMe: (args: object) => promiseWrite,
}

type cityModel = {
  getCities: () => promiseCities,
}

interface CtxModels {
  models: {
    User: userModel,
    City: cityModel,
  },
}

interface Ctx extends CtxMe, CtxModels { }

export {
  promiseWrite,
  promiseDocReference,
  queryDocData,
  docData,
  Id,
  User,
  City,
  promiseUserNull,
  promiseCityNull,
  promiseCities,
  CtxMe,
  userModel,
  cityModel,
  CtxModels,
  Ctx,
}

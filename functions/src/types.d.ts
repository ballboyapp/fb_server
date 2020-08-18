import admin from 'firebase-admin'

// https://stackoverflow.com/questions/58200432/argument-of-type-req-request-res-iresponse-next-nextfunction-void-is
// https://github.com/microsoft/TypeScript/issues/7352#issuecomment-191547232
declare module 'express-serve-static-core' {
  interface Request {
    user: admin.auth.DecodedIdToken | null,
  }
}

interface User {
  id: string
}

interface CtxMe {
  me: User | null,
}

type userModel = {
  signup: (args: object) => promiseWrite,
  getMe: () => promiseUserNull,
  updateMe: (args: object) => promiseWrite,
}

interface CtxModels {
  models: {
    User: userModel,
  },
}

interface Ctx extends CtxMe, CtxModels { }

type promiseWrite = Promise<admin.firestore.WriteResult>
type promiseUserNull = Promise<User | null>

export {
  User,
  CtxMe,
  userModel,
  CtxModels,
  Ctx,
  promiseWrite,
  promiseUserNull,
}

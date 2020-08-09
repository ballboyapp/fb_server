import admin from 'firebase-admin';

// https://stackoverflow.com/questions/58200432/argument-of-type-req-request-res-iresponse-next-nextfunction-void-is
// https://github.com/microsoft/TypeScript/issues/7352#issuecomment-191547232
declare module 'express-serve-static-core' {
  interface Request {
    user: null | admin.auth.DecodedIdToken,
  }
}

export interface User {
  id: string
}

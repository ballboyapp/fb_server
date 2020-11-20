import { CtxMe, userModel } from '../../types'
import { createMe } from './create-me'
import { getMe } from './get-me'
import { updateMe } from './update-me'
import { getUser } from './get-user'

export const genUserModel
  : (ctxMe: CtxMe) => userModel
  = (ctxMe) => ({
    createMe: args => createMe(ctxMe, args),
    getMe: () => getMe(ctxMe),
    updateMe: args => updateMe(ctxMe, args),
    getUser: args => getUser(args),
  })

import { CtxMe, userModel } from '../../types'
import { createMe } from './create-me'
import { getMe } from './get-me'
import { updateMe } from './update-me'

const genUserModel:
  (ctxMe: CtxMe) => userModel
  = (ctxMe) => ({
    createMe: (args: object) => createMe(ctxMe, args),
    getMe: () => getMe(ctxMe),
    updateMe: (args: object) => updateMe(ctxMe, args),
  })

export { genUserModel }

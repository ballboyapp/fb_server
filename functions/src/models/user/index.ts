import { CtxMe, userModel } from '../../types'
import { signup } from './signup'
import { getMe } from './get-me'
import { updateMe } from './update-me'

type fn = (ctxMe: CtxMe) => userModel

const genUserModel: fn = (ctxMe) => ({
  signup: (args: object) => signup(ctxMe, args),
  getMe: () => getMe(ctxMe),
  updateMe: (args: object) => updateMe(ctxMe, args),
})

export { genUserModel }

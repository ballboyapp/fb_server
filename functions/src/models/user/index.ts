import { CtxMe, userModel } from '../../types'
import { signup } from './signup'
import { getMe } from './get-me'
import { updateMe } from './update-me'

const genUserModel: (ctxMe: CtxMe) => userModel = (ctxMe) => ({
  signup: (args: object) => signup(ctxMe, args),
  getMe: () => getMe(ctxMe),
  updateMe: (args: object) => updateMe(ctxMe, args),
})

export { genUserModel }

import { CtxMe, userModel } from '../../types'
import { setMe } from './set-me'
import { getMe } from './get-me'
import { updateMe } from './update-me'

const genUserModel:
  (ctxMe: CtxMe) => userModel
  = (ctxMe) => ({
    setMe: (args: object) => setMe(ctxMe, args),
    getMe: () => getMe(ctxMe),
    updateMe: (args: object) => updateMe(ctxMe, args),
  })

export { genUserModel }

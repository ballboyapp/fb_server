import { CtxMe, meModel } from '../../types'
import { setMe } from './set-me'
import { getMe } from './get-me'
import { updateMe } from './update-me'

const genMeModel:
  (ctxMe: CtxMe) => meModel
  = (ctxMe) => ({
    setMe: (args: object) => setMe(ctxMe, args),
    getMe: () => getMe(ctxMe),
    updateMe: (args: object) => updateMe(ctxMe, args),
  })

export { genMeModel }

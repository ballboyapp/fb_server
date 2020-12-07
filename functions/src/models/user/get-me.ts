import { CtxMe, promiseUserNull } from '../../types'
import { Users } from '../../db'

export const getMe
  : (ctxMe: CtxMe) => promiseUserNull
  = (ctxMe) => {
    const meId = ctxMe?.me?.id

    // Only allow owner to access its own data
    if (meId == null) {
      return Promise.resolve(null)
    }

    // Query logged in user
    return Users.getById(meId)
  }

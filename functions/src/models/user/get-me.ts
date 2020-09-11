import { CtxMe, promiseUserNull } from '../../types'
import { Users } from '../../db'

const getMe:
  (ctxMe: CtxMe) => promiseUserNull
  = (ctxMe) => {
    const id = ctxMe?.me?.id

    // Only allow owner to access its own data
    if (id == null) {
      // throw new Error('Unauthorized')
      return Promise.resolve(null)
    }

    // Query logged in user
    return Users.getById(id)
  }

export { getMe }

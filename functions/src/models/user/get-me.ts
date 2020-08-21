import { CtxMe, promiseUserNull } from '../../types'
import { Users } from '../../db'

type fn = (ctxMe: CtxMe) => promiseUserNull

const getMe: fn = (ctxMe) => {
  const id = ctxMe?.me?.id

  // Only allow owner to access its own data
  if (id == null) {
    throw new Error('Unauthorized')
  }

  // Query logged in user
  return Users.getById(id)
}

export { getMe }

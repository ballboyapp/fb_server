import { Ctx, promiseUserNull } from '../../types'
import { Users }  from '../../db'

const getMe: (ctx: Ctx) => promiseUserNull = (ctx) => {
  const id = ctx?.me?.id

  // Only allow owner to get its own data
  if (id == null) {
    throw new Error('Unauthorized')
  }

  // Query logged in user
  return Users.getById(id)
}

export {
  getMe,
}

import { Ctx, promiseWrite } from '../../types'
import { Users } from '../../db'

const updateMe: (ctx: Ctx, args: object) => promiseWrite = (ctx, args) => {
  const id = ctx?.me?.id

  // Only allow owner to update its own data
  if (id == null) {
    throw new Error('Unauthorized')
  }

  if (args == null) {
    throw new Error('Bad request')
  }

  // Update user data
  return Users.update(id, args)
}

export {
  updateMe,
}

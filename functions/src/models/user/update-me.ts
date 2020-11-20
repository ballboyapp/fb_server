import { CtxMe, promiseWrite } from '../../types'
import { Users } from '../../db'

type fn = (ctxMe: CtxMe, args: object) => promiseWrite

export const updateMe: fn = async (ctxMe, args) => {
  const id = ctxMe?.me?.id

  // Only allow owner to update its own data
  if (id == null) {
    throw new Error('Unauthorized')
  }

  if (args == null) {
    throw new Error('Bad request')
  }

  return Users.update(id, args)
}

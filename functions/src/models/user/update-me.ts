import { CtxMe, promiseMeNull } from '../../types'
import { Users } from '../../db'

export const updateMe
  : (ctxMe: CtxMe, args: object) => promiseMeNull
  = async (ctxMe, args) => {
    const meId = ctxMe?.me?.id

    // Only allow owner to update its own data
    if (meId == null) {
      throw new Error('Unauthorized')
    }

    if (args == null) {
      throw new Error('Bad request')
    }

    await Users.update(meId, args)

    return Users.getById(meId)
  }

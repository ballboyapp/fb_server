import admin from 'firebase-admin'
import { Ctx } from '../../types'
import * as  Users from '../../db/users'

const updateUser: (
  ctx: Ctx,
  args: object,
) => Promise<admin.firestore.WriteResult>
  = ({ me }, args) => {
  // Only allow owner to update its own data
  if (me?.id == null) {
    throw new Error('Unauthorized')
  }

  if (args == null) {
    throw new Error('Bad request')
  }

  // Update user data
  return Users.update(me.id, args)
}

export {
  updateUser,
}

import { Ctx, User } from '../../types'
import * as  Users from '../../db/users'

const getPrivateUser: (
  ctx: Ctx,
) => Promise<User | null>
  = ({ me }) => {
  // Make sure user is logged in
  if (me?.id == null) {
    throw new Error('Unauthorized')
  }

  // Query current logged in user
  return Users.findById(me.id)
}

export {
  getPrivateUser,
}

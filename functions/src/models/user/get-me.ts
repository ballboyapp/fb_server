import { Ctx, User } from '../../types'
import * as  Users from '../../db/users'

const getMe: (
  ctx: Ctx,
) => Promise<User | null>
  = ({ me }) => {
  // Only allow owner to get its own data
  if (me?.id == null) {
    throw new Error('Unauthorized')
  }

  // Query current logged in user
  return Users.findById(me.id)
}

export {
  getMe,
}

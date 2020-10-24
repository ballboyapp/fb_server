import pick from 'lodash/pick'
import { User, UserDeatilsInput, promiseUserNull } from '../../types'
import { Users } from '../../db'

export const getUser
  : (args: UserDeatilsInput) => promiseUserNull
  = async ({ id }) => {
    if (id == null) {
      return null
    }

    const user = await Users.getById(id)

    // Only return public data
    return user != null ? pick(user, ['id', 'profile']) as User : null
  }

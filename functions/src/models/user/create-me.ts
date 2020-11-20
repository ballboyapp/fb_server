import { auth } from 'firebase-admin'
import { CtxMe, promiseWrite } from '../../types'
import { Users } from '../../db'

export const createMe
  : (ctxMe: CtxMe, args: object) => promiseWrite
  = async (ctxMe, args) => {
    const id = ctxMe?.me?.id

    // Only allow owner to update its own data
    if (id == null) {
      throw new Error('Unauthorized')
    }

    if (args == null) {
      throw new Error('Bad request')
    }

    // Make sure user doesn't exist already
    const existingUser = await Users.getById(id)

    if (existingUser != null) {
      throw new Error('Bad request')
    }

    // Get auth user
    const user = await auth().getUser(id)

    if (user == null) {
      throw new Error('Bad request')
    }

    // What about adding public user id?
    const doc = {
      id: user.uid,
      email: user.email || '',
      emailVerified: user.emailVerified || false,
      disabled: user.disabled || false,
      profile: {
        id: user.uid,
        username: user.displayName || '',
        avatar: user.photoURL || '',
        ...args, // language, cityId, ...
      }
    }

    return Users.set(id, doc)
  }

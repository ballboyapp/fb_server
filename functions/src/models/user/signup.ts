import { auth } from 'firebase-admin'
import { CtxMe, promiseWrite } from '../../types'
import { Users } from '../../db'

type fn = (ctxMe: CtxMe, args: object) => promiseWrite

const signup: fn = async (ctxMe, args) => {
  const id = ctxMe?.me?.id
  console.log(`signup model id: ${id}, ctxMe: ${JSON.stringify(ctxMe)}`)

  // Only allow owner to update its own data
  if (id == null) {
    throw new Error('Unauthorized')
  }

  if (args == null) {
    throw new Error('Bad request')
  }

  // Make sure user doesn't exist already
  const exists = (await Users.getById(id)) != null

  if (exists) {
    throw new Error('Bad request')
  }

  // Get auth user
  const user = await auth().getUser(id)

  if (user == null) {
    throw new Error('Bad request')
  }

  // Insert user in DB
  const doc = {
    id: user.uid,
    email: user.email || '',
    emailVerified: user.emailVerified || false,
    disabled: user.disabled || false,
    username: user.displayName || '',
    avatar: user.photoURL || '',
    ...args, // language, ...
  }

  return Users.set(id, doc)
}

export { signup }

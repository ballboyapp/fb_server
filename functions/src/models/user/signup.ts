import { CtxMe, promiseWrite } from '../../types'
import { Users } from '../../db'

type fn = (ctxMe: CtxMe, args: object) => promiseWrite

const signup: fn = async (ctxMe, args) => {
  // Make sure user is logged out
  if (usr) {
    return null
  }

  const { error } = validateSignup(args)
  if (error) {
    console.log('INVALID SIGNUP CREDENTIALS', error)
    throw new Error(error.details[0].message) // Bad request - 400
  }

  // Make sure user doesn't exist already
  const user = await User.findOne({ email: args.email })
  if (user) {
    console.log('USER ALREADY REGISTERED', user)
    throw new Error('Email already in use') // Bad request - 400
  }

  return User.createUser(args) // Success request - 200
}

module.exports = signup

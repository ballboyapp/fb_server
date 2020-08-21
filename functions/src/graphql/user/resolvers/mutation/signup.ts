// const { NotificationsList } = require('../../../../models');
import { Ctx, promiseUserNull } from '../../../../types'

type fn = (root: object, args: object, ctx: Ctx) => promiseUserNull

// TODO: change name to setMe
const signup: fn = async (root, args, ctx) => {
  console.log(`signupMutation args: ${JSON.stringify(args)}, ctx: ${JSON.stringify(ctx)} !!!!`)

  await ctx.models.User.signup(args)

  const user = await ctx.models.User.getMe()

  // TODO: or use listener?
  // // Register user on NotificationsList
  // try {
  //   await NotificationsList.createUser({
  //     id: user._id.toString(),
  //     name: user.profile.username,
  //   })
  // } catch (exc) {
  //   console.log('Failed registering user to NotificationsList', exc)
  //   // TODO: log/sentry
  // }

  return user
}

export { signup }

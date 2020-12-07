// const { NotificationsList } = require('../../../../models');
import { Ctx, promiseUserNull } from '../../../../types'


export const createMe:
  (root: object, args: object, ctx: Ctx) => promiseUserNull
  = async (root, args, ctx) => {
    console.log(`createMeMutation args: ${JSON.stringify(args)}, ctx: ${JSON.stringify(ctx)} !!!!`)

    const me = await ctx.models.User.createMe(args)

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

    return me
  }

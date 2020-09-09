import { Ctx, promiseUserNull } from '../../../../types'

const updateMe:
  (root: object, args: object, ctx: Ctx) => promiseUserNull
  = async (root, args, ctx) => {
    console.log('updateMeMutation', args)

    await ctx.models.User.updateMe(args)

    return ctx.models.User.getMe()
  }

export { updateMe }

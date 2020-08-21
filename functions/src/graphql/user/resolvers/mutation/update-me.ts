import { Ctx, promiseUserNull } from '../../../../types'

type fn = (root: object, args: object, ctx: Ctx) => promiseUserNull

const updateMe: fn = async (root, args, ctx) => {
  console.log('updateMeMutation', args)

  await ctx.models.User.updateMe(args)

  return ctx.models.User.getMe()
}

export { updateMe }

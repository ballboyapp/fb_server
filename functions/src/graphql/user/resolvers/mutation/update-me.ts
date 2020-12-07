import { Ctx, promiseUserNull } from '../../../../types'

export const updateMe:
  (root: object, args: object, ctx: Ctx) => promiseUserNull
  = async (root, args, ctx) => {
    console.log('updateMeMutation', args)

    const me = await ctx.models.User.updateMe(args)

    return me
  }

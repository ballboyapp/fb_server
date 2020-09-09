import { Ctx, promiseUserNull } from '../../../../types'

const getMe:
  (root: object, args: object, ctx: Ctx) => promiseUserNull
  = async (root, args, ctx) => {
    console.log('getMeQuery', args)
    const me = await ctx.models.User.getMe()
    console.log({ me })
    return me
    // return ctx.models.User.getMe()
  }

export { getMe }

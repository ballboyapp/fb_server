import { Ctx, promiseUserNull } from '../../../../types'

export const me
  : (root: object, args: object, ctx: Ctx) => promiseUserNull
  = (root, args, ctx) => {
    console.log('meQuery', args)
    return ctx.models.User.getMe()
  }

import { Ctx, promiseUserNull } from '../../../../types'

const getMe:
  (root: object, args: object, ctx: Ctx) => promiseUserNull
  = (root, args, ctx) => {
    console.log('getMeQuery', args)
    return ctx.models.User.getMe()
  }

export { getMe }

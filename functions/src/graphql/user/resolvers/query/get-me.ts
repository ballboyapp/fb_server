import { Ctx, promiseUserNull } from '../../../../types'

const getMe: (root: object, args: object, ctx: Ctx) => promiseUserNull = (root, args, ctx) => (
  // console.log('getMeQuery', args)
  ctx.models.User.getMe()
)

export { getMe }

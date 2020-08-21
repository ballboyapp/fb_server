import { Ctx, promiseUserNull } from '../../../../types'

type fn = (root: object, args: object, ctx: Ctx) => promiseUserNull

const getMe: fn = (root, args, ctx) => {
  // console.log('getMeQuery', args)
  return ctx.models.User.getMe()
}

export { getMe }

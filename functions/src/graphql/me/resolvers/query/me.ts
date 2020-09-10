import { Ctx, promiseUserNull } from '../../../../types'

const me:
  (root: object, args: object, ctx: Ctx) => promiseUserNull
  = (root, args, ctx) => {
    console.log('meQuery', args)
    return ctx.models.Me.getMe()
  }

export { me }

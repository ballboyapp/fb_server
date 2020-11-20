import { Ctx, promiseUserNull } from '../../../../types'

export const organizer
  : (root: { organizerId: string }, args: object, ctx: Ctx) => promiseUserNull
  = (root, args, ctx) => {
    // console.log('organizerField', root, args, ctx);
    return ctx.models.User.getUser({ id: root.organizerId })
  }

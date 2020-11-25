import { Ctx } from '../../../../types'

export const isOrganizer
  : (root: { organizerId: string }, args: object, ctx: Ctx) => boolean
  = (root, args, ctx) => {
    // console.log('isOrganizerField', root, args)
    return ctx.me != null && root.organizerId.includes(ctx.me.id)
  }

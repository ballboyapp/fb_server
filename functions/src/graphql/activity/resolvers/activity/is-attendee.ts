import { Ctx } from '../../../../types'

export const isAttendee
  : (root: { attendeesIds: string[] }, args: object, ctx: Ctx) => boolean
  = (root, args, ctx) => {
    // console.log('isAttendeeField', root, args)
    return ctx.me != null && root.attendeesIds.includes(ctx.me.id)
  }

import { Ctx, promiseUserNull, promiseUsers } from '../../../../types'

export const attendees
  : (root: { attendeesIds: string[] }, args: object, ctx: Ctx) => promiseUsers
  = (root, args, ctx) => {
    // console.log('attendeesField', root, args);
    const promises: promiseUserNull[] = []

    root.attendeesIds.forEach((attendeeId) => {
      promises.push(ctx.models.User.getUser({ id: attendeeId }))
    })

    return Promise.all(promises)
  }

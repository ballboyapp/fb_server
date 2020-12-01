import { Ctx, Id, promiseActivityNull } from '../../../../types'
// import { ACTIVITY_STATUSES } from '../../../../constants'
// import { Activities } from '../../../../db'

export const addAttendee
  : (root: object, args: Id, ctx: Ctx) => promiseActivityNull
  = async (root, args, ctx) => {
    console.log('addAttendeeMutation', args, ctx)

    const activity = await ctx.models.Activity.addAttendee(args)

    // if (activity != null) {
    //   const notification = {
    //     notificationType: NOTIFICATION_TYPES.ATTENDEE_ADDED,
    //     sender: {
    //       id: usr._id,
    //       name: get(usr, 'profile.username', ''),
    //       avatarURL: get(usr, 'profile.avatar', ''),
    //     },
    //     payload: {
    //       activityId: activity._id,
    //       activityTitle: activity.title,
    //     },
    //   }

    //   // Send notification to all attendees plus the organizer
    //   // const promises = activity.getUsersExcept(usr._id).map(userId => (
    //   //   NotificationsList.insertNotification(userId, notification)
    //   // ))

    //   // await Promise.all(promises)
    // }

    return activity
  }

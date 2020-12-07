import { Ctx, Id, promiseActivityNull } from '../../../../types'

export const cancelActivity
  : (root: object, args: Id, ctx: Ctx) => promiseActivityNull
  = async (root, args, ctx) => {
    // console.log('cancelActivityMutation', args, ctx)
    // const { usr } = ctx
    // const { msg } = args

    const activity = await ctx.models.Activity.cancelActivity(args)

    // if (activity == null) {
    //   return null
    // }

    // const notification = {
    //   notificationType: NOTIFICATION_TYPES.ACTIVITY_CANCELED,
    //   sender: {
    //     id: usr._id,
    //     name: get(usr, 'profile.username', ''),
    //     avatarURL: get(usr, 'profile.avatar', ''),
    //   },
    //   payload: {
    //     activityId: activity._id,
    //     activityTitle: activity.title,
    //   },
    // }

    // // Send notification to all attendees except the organizer
    // const promises = activity.getUsersExcept(usr._id).map(userId => (
    //   NotificationsList.insertNotification(userId, notification)
    // ))

    // await Promise.all(promises)

    // // Post message on chat screen
    // if (msg != null && msg.trim().length > 0) {
    //   const { chatRoomId: roomId } = activity
    //   await ctx.models.ChatRooms.sendMessage({ roomId, text: msg })
    // }

    return activity
  }

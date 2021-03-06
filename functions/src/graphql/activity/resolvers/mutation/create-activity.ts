// const { ChatRooms } = require('../../../../models');
import { Ctx, CreateActivityInput, promiseActivityNull } from '../../../../types'

export const createActivity
  // TODO: look for a better name: args: { params/fields }
  : (root: object, args: CreateActivityInput, ctx: Ctx) => promiseActivityNull
  = async (root, args, ctx) => {
    console.log('createActivityMutation', args, ctx)
    const activityId = await ctx.models.Activity.createActivity(args)
    console.log({ activityId })

    if (activityId == null) {
      throw new Error('Error creating activity')
    }

    const activity = await ctx.models.Activity.getActivityDetails({ id: activityId })
    console.log('ACTIVITY', activity)
    // TODO: send notifications
    // TODO: create shareLink

    // try {
    //   // Create chat room
    //   const room = await ChatRooms.createRoom();

    //   // Store roomId into activity doc
    //   await ctx.models.Activity.setChatRoomId({
    //     _id: activity._id,
    //     chatRoomId: room._id,
    //   });
    // } catch (exc) {
    //   console.log('Failed creating chat room', exc);
    // }

    return activity
  }

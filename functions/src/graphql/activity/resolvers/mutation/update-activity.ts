import { Ctx, UpdateActivityInput, promiseActivityNull } from '../../../../types'

export const updateActivity
  : (root: object, args: UpdateActivityInput, ctx: Ctx) => promiseActivityNull
  = async (root, args, ctx) => {
    // console.log('updateActivityMutation', args, ctx)
    return ctx.models.Activity.updateActivity(args)
  }

import { Ctx, ActivityDetailsInput, promiseActivityNull } from '../../../../types'

export const activityDetails
  : (root: object, args: ActivityDetailsInput, ctx: Ctx) => promiseActivityNull
  = async (root, args, ctx) => {
    // console.log('activityDetailsQuery', args);
    return ctx.models.Activity.getActivityDetails(args)
  }

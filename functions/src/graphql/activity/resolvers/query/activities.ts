import { Ctx, ActivitiesInput, promiseActivities } from '../../../../types'

export const activities
  : (root: object, args: ActivitiesInput, ctx: Ctx) => promiseActivities
  = (root, args, ctx) => {
    // console.log('activitiesQuery', args)
    return ctx.models.Activity.getActivities(args)
  }

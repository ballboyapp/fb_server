import { Ctx, SpotsInput, promiseSpots } from '../../../../types'

export const spots
  : (root: object, args: SpotsInput, ctx: Ctx) => promiseSpots
  = (root, args, ctx) => {
    // console.log('spotsQuery', args)
    return ctx.models.Spot.getSpots(args)
  }

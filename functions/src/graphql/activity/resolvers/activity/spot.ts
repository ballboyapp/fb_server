import { Ctx, promiseSpotNull } from '../../../../types'

export const spot
  : (root: { spotId: string }, args: object, ctx: Ctx) => promiseSpotNull
  = (root, args, ctx) => {
    // console.log('spotField', args);
    return ctx.models.Spot.getSpotDetails({ id: root.spotId })
  }

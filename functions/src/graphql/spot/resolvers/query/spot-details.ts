import { Ctx, promiseSpotNull, SpotDetailsInput } from '../../../../types'

export const spotDetails
  : (root: object, args: SpotDetailsInput, ctx: Ctx) => promiseSpotNull
  = (root, args, ctx) => {
    // console.log('spotDetailsQuery', args)
    return ctx.models.Spot.getSpotDetails(args)
  }

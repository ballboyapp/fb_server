import { Ctx, promiseSpotNull, SpotDeatilsInput } from '../../../../types'

export const spotDetails
  : (root: object, args: SpotDeatilsInput, ctx: Ctx) => promiseSpotNull
  = (root, args, ctx) => {
    // console.log('spotDetailsQuery', args)
    return ctx.models.Spot.getSpotDetails(args)
  }

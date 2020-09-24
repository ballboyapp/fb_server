import { CtxMe, spotModel } from '../../types'
import { getSpots } from './get-spots'
import { getSpotDetails } from './get-spot-details'

export const genSpotModel
  : (ctx: CtxMe) => spotModel
  = (ctxMe) => ({
    getSpots: args => getSpots(args),
    getSpotDetails: args => getSpotDetails(args),
  })

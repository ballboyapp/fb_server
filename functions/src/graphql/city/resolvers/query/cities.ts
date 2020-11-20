import { Ctx, promiseCities } from '../../../../types'

export const cities
  : (root: object, args: object, ctx: Ctx) => promiseCities
  = (root, args, ctx) => {
    console.log('citiesQuery', args)
    return ctx.models.City.getCities()
  }

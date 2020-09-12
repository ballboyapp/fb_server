import { Ctx, promiseCities } from '../../../../types'

type fn = (root: object, args: object, ctx: Ctx) => promiseCities

const cities: fn = (root, args, ctx) => {
  console.log('citiesQuery', args)
  return ctx.models.City.getCities()
}

export { cities }

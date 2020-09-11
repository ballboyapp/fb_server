import { Ctx, promiseCities } from '../../../../types'

type fn = (root: object, args: object, ctx: Ctx) => promiseCities

const getCities: fn = (root, args, ctx) => {
  console.log('getCitiesQuery', args)
  return ctx.models.City.getCities()
}

export { getCities }

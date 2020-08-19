import { Ctx, promiseCityNull } from '../../../../types'

type fn = (root: object, args: object, ctx: Ctx) => promiseCityNull

const getCities: fn = (root, args, ctx) => (
  // console.log('citiesQuery', args);
  ctx.models.City.getCities(args)
)

export { getCities }

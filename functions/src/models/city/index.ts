import { CtxMe, cityModel } from '../../types'
import { getCities } from './get-cities'

type fn = (ctxMe: CtxMe) => cityModel

export const genCityModel: fn = (ctxMe) => ({
  getCities: () => getCities(ctxMe),
})

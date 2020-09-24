import { CtxMe, cityModel } from '../../types'
import { getCities } from './get-cities'

export const genCityModel
  : (ctxMe: CtxMe) => cityModel
  = (ctxMe) => ({
    getCities: () => getCities(),
  })

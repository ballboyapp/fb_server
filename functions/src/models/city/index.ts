import { CtxMe, cityModel } from '../../types'
import { getCities } from './get-cities'

type fn = (ctxMe: CtxMe) => cityModel

const genCityModel: fn = (ctxMe) => ({
  getCities: () => getCities(ctxMe),
})

export { genCityModel }

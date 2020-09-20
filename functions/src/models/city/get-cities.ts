import { CtxMe, promiseCities } from '../../types'
import { Cities } from '../../db'

type fn = (ctxMe: CtxMe) => promiseCities

export const getCities: fn = () => {
  // Allow not logged in users to access this method
  return Cities.getAll()
}

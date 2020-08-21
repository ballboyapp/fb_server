import { CtxMe, promiseCities } from '../../types'
import { Cities } from '../../db'

type fn = (ctxMe: CtxMe) => promiseCities

const getCities: fn = () => {
  // Allow not logged in users to access this method
  return Cities.getAll()
}

export { getCities }

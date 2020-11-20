import { promiseCities } from '../../types'
import { Cities } from '../../db'

export const getCities
  : () => promiseCities
  = () => {
    return Cities.getAll()
  }

const isNumber = require('lodash/isNumber')
import { SpotsInput, promiseSpots, Sport } from '../../types'
import { SPORTS } from '../../constants'
import { Spots } from '../../db'

export const getSpots
  : (args: SpotsInput) => promiseSpots
  = async ({
    cityId,
    sports = Object.values(SPORTS) as Sport[],
    // ^ In case sports is not provided, default to all
    offset,
    limit,
  }) => {
    if (cityId == null) {
      throw new Error('Bad request')
    }

    if (!isNumber(limit) || !isNumber(offset)) {
      throw new Error('Bad request')
    }

    return Spots.getByCitySports({ cityId, sports, offset, limit })
  }

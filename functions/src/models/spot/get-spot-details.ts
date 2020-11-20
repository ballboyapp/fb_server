import { SpotDetailsInput, promiseSpotNull } from '../../types'
import { Spots } from '../../db'

export const getSpotDetails
  : (args: SpotDetailsInput) => promiseSpotNull
  = ({
    id,
  }) => {
    if (id == null) {
      throw new Error('Bad request')
    }

    return Spots.getById(id)
  }

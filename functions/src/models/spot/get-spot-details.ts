import { SpotDeatilsInput, promiseSpotNull } from '../../types'
import { Spots } from '../../db'

export const getSpotDetails
  : (args: SpotDeatilsInput) => promiseSpotNull
  = async ({
    id,
  }) => {
    if (id == null) {
      throw new Error('Bad request')
    }

    return Spots.getById(id)
  }

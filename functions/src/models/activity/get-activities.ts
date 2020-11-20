import isNumber from 'lodash/isNumber'
import { Sport, ActivitiesInput, promiseActivities } from '../../types'
import { SPORTS } from '../../constants'
import { Activities } from '../../db'

export const getActivities
  : (args: ActivitiesInput) => promiseActivities
  = async ({
    sports = Object.values(SPORTS) as Sport[],
    // ^ In case sports is not provided, default to all
    offset,
    limit,
  }) => {
    if (!isNumber(offset) || !isNumber(limit)) {
      throw new Error('Bad request')
    }

    return Activities.getBySports({ sports, offset, limit })
  }

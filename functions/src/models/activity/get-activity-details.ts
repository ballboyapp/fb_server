import { ActivityDetailsInput, promiseActivityNull } from '../../types'
import { Activities } from '../../db'

export const getActivityDetails
  : (args: ActivityDetailsInput) => promiseActivityNull
  = ({
    id,
  }) => {
    if (id == null) {
      throw new Error('Bad request')
    }

    return Activities.getById(id)
  }

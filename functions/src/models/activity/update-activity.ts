import pick from 'lodash/pick'
import { CtxMe, UpdateActivityInput, promiseActivityNull } from '../../types'
import { ACTIVITY_STATUSES } from '../../constants'
import { Activities } from '../../db'

export const updateActivity
  : (ctxMe: CtxMe, args: UpdateActivityInput) => promiseActivityNull
  = async (ctxMe, args) => {
    const meId = ctxMe?.me?.id

    // Make sure user is logged in
    if (meId == null) {
      throw new Error('Unauthorized')
    }

    if (args == null) {
      throw new Error('Bad request')
    }

    const { id: activityId, dateTime, spotId, title } = args
    // TODO: make sure spot accepts the given sport

    if (activityId == null || dateTime == null || spotId == null || title == null) {
      throw new Error('Bad request')
    }

    const activity = await Activities.getById(activityId)

    // Make sure user is the owner
    if (activity == null || activity?.organizerId !== meId) {
      throw new Error('Unauthorized')
    }

    if (activity?.status !== ACTIVITY_STATUSES.ACTIVE) {
      throw new Error('Event is not active')
    }

    const fields = pick(args, [
      'dateTime',
      'duration',
      'capacity',
      'spotId',
      'title',
      'description',
      'repeatFrequency',
    ])

    await Activities.update(activityId, fields)

    return Activities.getById(activityId)
  }

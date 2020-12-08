import { CtxMe, Id, promiseActivityNull } from '../../types'
import { ACTIVITY_STATUSES } from '../../constants'
import { Activities } from '../../db'

export const cancelActivity
  : (ctxMe: CtxMe, args: Id) => promiseActivityNull
  = async (ctxMe, args) => {
    const meId = ctxMe?.me?.id

    // Make sure user is logged in
    if (meId == null) {
      throw new Error('Unauthorized')
    }

    const activityId = args?.id

    if (activityId == null) {
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

    await Activities.update(activityId, { status: ACTIVITY_STATUSES.CANCELED })

    return Activities.getById(activityId)
  }

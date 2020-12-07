import { CtxMe, Id, promiseActivityNull } from '../../types'
import { ACTIVITY_STATUSES } from '../../constants'
import { Activities } from '../../db'

export const addAttendee
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

    if (activity == null) {
      throw new Error('Activity not found')
    }

    const { status, capacity = -1, attendeesIds } = activity

    if (status !== ACTIVITY_STATUSES.ACTIVE) {
      throw new Error('Activity is not active')
    }

    const isAttendee = attendeesIds.includes(meId)

    if (isAttendee) {
      throw new Error('You already signed up!')
    }

    const isFull = capacity > 0 && capacity === attendeesIds.length

    if (isFull) {
      throw new Error('The activity is full')
    }

    const fields = { attendeesIds: [...attendeesIds, meId] }

    await Activities.update(activityId, fields)

    return Activities.getById(activityId)
  }

import { CtxMe, Id, promiseActivityNull } from '../../types'
import { ACTIVITY_STATUSES } from '../../constants'
import { Activities } from '../../db'

export const removeAttendee
  : (ctxMe: CtxMe, args: Id) => promiseActivityNull
  = async (ctxMe, args) => {
    const id = ctxMe?.me?.id

    // Make sure user is logged in
    if (id == null) {
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

    const { status, attendeesIds } = activity

    if (status !== ACTIVITY_STATUSES.ACTIVE) {
      throw new Error('Activity is not active');
    }

    const index = attendeesIds.indexOf(id)

    // isAttendee
    if (index == -1) {
      throw new Error('You are not an attendee')
    }

    const fields = {
      attendeesIds: [
        ...attendeesIds.slice(0, index),
        // remove desired index
        ...attendeesIds.slice(index + 1, attendeesIds.length - 1),
      ],
    }

    await Activities.update(activityId, fields)

    return Activities.getById(activityId)
  }

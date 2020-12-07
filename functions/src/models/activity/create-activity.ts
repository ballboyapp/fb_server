import { CtxMe, CreateActivityInput, promiseActivityNull } from '../../types'
import { ACTIVITY_STATUSES } from '../../constants'
import { Activities } from '../../db'

export const createActivity
  : (ctxMe: CtxMe, args: CreateActivityInput) => promiseActivityNull
  = async (ctxMe, args) => {
    const meId = ctxMe?.me?.id

    // Make sure user is logged in
    if (meId == null) {
      throw new Error('Unauthorized')
    }

    if (args == null) {
      throw new Error('Bad request')
    }

    const { sport, dateTime, spotId, title } = args
    console.log({ sport, dateTime, spotId, title })
    // TODO: make sure spot accepts the given sport

    if (sport == null || dateTime == null || spotId == null || title == null) {
      throw new Error('Bad request')
    }

    const doc = {
      ...args,
      organizerId: meId,
      status: ACTIVITY_STATUSES.ACTIVE,
      attendeesIds: [meId],
    }

    const res = await Activities.add(doc)

    if (res?.id == null) return null

    return Activities.getById(res.id)
  }

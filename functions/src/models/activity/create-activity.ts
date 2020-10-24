import { CtxMe, CreateActivityInput, promiseDocReference } from '../../types'
import { Activities } from '../../db'

export const createActivity
  : (ctxMe: CtxMe, args: CreateActivityInput) => promiseDocReference
  = (ctxMe, args) => {
    const id = ctxMe?.me?.id

    // Make sure user is logged in
    if (id == null) {
      throw new Error('Unauthorized')
    }

    if (args == null) {
      throw new Error('Bad request')
    }

    const { sport, dateTime, spotId, title } = args
    // TODO: make sure spot accepts the given sport

    if (sport == null || dateTime == null || spotId == null || title == null) {
      throw new Error('Bad request')
    }

    return Activities.add({ ...args, organizerId: id })
  }

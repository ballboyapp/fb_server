import { CtxMe, CreateActivityInput } from '../../types'
import { ACTIVITY_STATUSES } from '../../constants'
import { Activities } from '../../db'

export const createActivity
  : (ctxMe: CtxMe, args: CreateActivityInput) => Promise<string | null>
  = async (ctxMe, args) => {
    const id = ctxMe?.me?.id

    console.log('CREATE ACTIVITY ME.ID', id, args)

    // Make sure user is logged in
    if (id == null) {
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
      organizerId: id,
      status: ACTIVITY_STATUSES.ACTIVE,
    }

    const res = await Activities.add(doc)
    console.log('ADD ACTIVITY RES', res)

    return res?.id || null
  }

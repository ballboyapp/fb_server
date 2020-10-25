import { CtxMe, CreateActivityInput } from '../../types'
import { Activities } from '../../db'
// import { spreadDoc } from '../../db/utils'

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

    const res = await Activities.add({ ...args, organizerId: id })
    console.log('ADD ACTIVITY RES', res)

    return res?.id || null
  }

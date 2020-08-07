import admin from 'firebase-admin'
import { IUser } from '../types'

const db = admin.firestore()

//-----------------------------------------------------------------------------
/**
 * Get user for the given id
 * @param {String} userId
 * @returns {Promise}
 */
const getUserById = async (userId: string): Promise<IUser | null> => {
  if (userId == null) {
    throw new Error('getUserById userId is required')
  }

  const snap = await db.collection('users')
    .where('id', '==', userId)
    .limit(1)
    .get()

  if (snap == null || snap.empty) {
    return null
  }

  const doc = snap.docs[0]

  return { id: doc.id, ...doc.data() }
}
//-----------------------------------------------------------------------------

export {
  getUserById,
}

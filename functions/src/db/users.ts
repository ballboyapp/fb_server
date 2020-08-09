import admin from 'firebase-admin'
import { spreadDoc } from './utils'
import { User } from '../types'

const db = admin.firestore()

//-----------------------------------------------------------------------------
/**
 * Get user for the given id
 * @param {String} userId
 * @returns {Promise}
 */
const findById = async (userId: string): Promise<User | null> => {
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

  return spreadDoc(doc)
}
//-----------------------------------------------------------------------------
/**
 * Get first user
 * @returns {Promise}
 */
const findOne = async (): Promise<User | null> => {
  const snap = await db.collection('users')
    .limit(1)
    .get()

  if (snap == null || snap.empty) {
    return null
  }

  const doc = snap.docs[0]

  return spreadDoc(doc)
}
//-----------------------------------------------------------------------------

export {
  findById,
  findOne,
}

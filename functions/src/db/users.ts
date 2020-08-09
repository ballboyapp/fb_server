import admin from 'firebase-admin'
import { spreadDoc } from './utils'
import { User } from '../types'

const db = admin.firestore()

// TODO: use class with static methods
// https://github.com/betaflag/graphql-server-scaffolding/tree/master/role-oriented/src/models
//-----------------------------------------------------------------------------
/**
 * Query user for the given id
 */
const findById: (id: string) => Promise<User | null> = async (id) => {
  if (id == null) {
    throw new Error('Bad request')
  }

  const doc = await db.collection('users')
    .doc(id)
    .get()

  if (doc == null || !doc.exists) {
    return null
  }

  return spreadDoc(doc)
}
//-----------------------------------------------------------------------------
/**
 * Query random user
 */
const findOne: () => Promise<User | null> = async () => {
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
/**
 * Update user for the given id
 */
const update: (
  id: string,
  fields: object,
) => Promise<admin.firestore.WriteResult>
  = (id, fields) => (
  db.collection('users')
    .doc(id)
    .update(fields)
)
//-----------------------------------------------------------------------------

export {
  findById,
  findOne,
  update,
}

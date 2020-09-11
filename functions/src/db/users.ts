import admin from 'firebase-admin'
import { spreadDoc } from './utils'
import { promiseWrite, promiseUserNull } from '../types'

const db = admin.firestore()

class Users {
  /**
   * Set user for the given id
   */
  static set: (id: string, doc: object) => promiseWrite = (id, doc) => {
    if (id == null || doc == null) {
      throw new Error('Bad request')
    }

    return db.collection('users')
      .doc(id)
      .set(doc)
  }

  /**
   * Query user for the given id
   */
  static getById: (id: string) => promiseUserNull = async (id) => {
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

  /**
   * Query random user
   */
  static getOne: () => promiseUserNull = async () => {
    const snap = await db.collection('users')
      .limit(1)
      .get()

    if (snap == null || snap.empty) {
      return null
    }

    const doc = snap.docs[0]

    return spreadDoc(doc)
  }

  /**
   * Update user for the given id
   */
  static update: (id: string, fields: object) => promiseWrite = (id, fields) => (
    db.collection('users')
      .doc(id)
      .update(fields)
  )
}

export { Users }

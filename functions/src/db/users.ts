import admin from 'firebase-admin'
import { User, promiseWrite, promiseUserNull } from '../types'
import { spreadDoc } from './utils'

const db = admin.firestore()
const collection = db.collection('users')

export class Users {
  /**
   * Set user for the given id
   */
  static set
    : (id: string, doc: object) => promiseWrite
    = (id, doc) => {
      if (id == null || doc == null) {
        throw new Error('Bad request')
      }

      return collection.doc(id).set(doc)
    }

  /**
   * Query user for the given id
   */
  static getById
    : (id: string) => promiseUserNull
    = async (id) => {
      if (id == null) {
        throw new Error('Bad request')
      }

      const doc = await collection.doc(id).get()

      if (doc == null || !doc.exists) {
        return null
      }

      return spreadDoc(doc) as User
    }

  /**
   * Query random user
   */
  static getOne
    : () => promiseUserNull
    = async () => {
      const snap = await collection.limit(1).get()

      if (snap == null || snap.empty) {
        return null
      }

      const doc = snap.docs[0]

      return spreadDoc(doc) as User
    }

  /**
   * Update user for the given id
   */
  static update
    : (id: string, fields: object) => promiseWrite
    = (id, fields) => (
      collection.doc(id).update(fields)
    )
}

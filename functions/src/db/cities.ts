import admin from 'firebase-admin'
import {
  City,
  promiseDocReference,
  promiseCityNull,
  promiseCities,
} from '../types'
import { spreadDoc } from './utils'

const db = admin.firestore()
const collection = db.collection('cities')

export class Cities {
  /**
   * Add a new city
   */
  static add
    : (doc: object) => promiseDocReference
    = (doc) => {
      if (doc == null) {
        throw new Error('Bad request')
      }

      return collection.add(doc)
    }

  /**
   * Query random city
   */
  static getOne
    : () => promiseCityNull
    = async () => {
      const snap = await collection.limit(1).get()

      if (snap == null || snap.empty) {
        return null
      }

      const doc = snap.docs[0]

      return spreadDoc(doc) as City
    }

  /**
   * Query all cities
   */
  static getAll
    : () => promiseCities
    = async () => {
      const snap = await collection.get()

      if (snap == null || snap.empty) {
        return []
      }

      return snap.docs.map((doc) => spreadDoc(doc) as City)
    }
}

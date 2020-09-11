import admin from 'firebase-admin'
import { spreadDoc } from './utils'
import {
  City,
  promiseDocReference,
  promiseCityNull,
  promiseCities,
} from '../types'

const db = admin.firestore()

class Cities {
  /**
   * Add a new city
   */
  static add: (doc: object) => promiseDocReference = (doc) => {
    if (doc == null) {
      throw new Error('Bad request')
    }

    return db.collection('cities')
      .add(doc)
  }

  /**
   * Query random city
   */
  static getOne: () => promiseCityNull = async () => {
    const snap = await db.collection('cities')
      .limit(1)
      .get()

    if (snap == null || snap.empty) {
      return null
    }

    const doc = snap.docs[0]

    return spreadDoc(doc) as City
  }

  /**
   * Query all cities
   */
  static getAll: () => promiseCities = async () => {
    const snap = await db.collection('cities')
      .get()

    if (snap == null || snap.empty) {
      return []
    }

    return snap.docs.map((doc) => spreadDoc(doc) as City)
  }
}

export { Cities }

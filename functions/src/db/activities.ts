import admin from 'firebase-admin'
import { ACTIVITY_STATUSES } from '../constants'
import {
  Activity,
  ActivitiesInput,
  promiseWrite,
  promiseActivityNull,
  promiseActivities,
  promiseDocReference,
} from '../types'
import { spreadDoc } from './utils'

const db = admin.firestore()
const collection = db.collection('activities')

const MAX_LIMIT = 20

export class Activities {
  /**
   * Add new activity
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
   * Set activity for the given id
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
   * Query activity for the given id
   */
  static getById
    : (id: string) => promiseActivityNull
    = async (id) => {
      if (id == null) {
        throw new Error('Bad request')
      }

      const doc = await collection.doc(id).get()

      if (doc == null || !doc.exists) {
        return null
      }

      return spreadDoc(doc) as Activity
    }

  /**
   * Query random activity
   */
  static getOne
    : () => promiseActivityNull
    = async () => {
      const snap = await collection.limit(1).get()

      if (snap == null || snap.empty) {
        return null
      }

      const doc = snap.docs[0]

      return spreadDoc(doc) as Activity
    }

  /**
   * Query activities
   */
  static getBySports
    : (args: ActivitiesInput) => promiseActivities
    = async (args) => {
      const {
        // sports,
        offset,
        limit,
      } = args

      const snap = await collection
        // .where('sports', 'array-contains-any', sports)
        .where('status', 'in', [ACTIVITY_STATUSES.ACTIVE, ACTIVITY_STATUSES.CANCELED])
        .offset(offset)
        .orderBy('dateTime', 'asc')
        .limit(Math.min(limit, MAX_LIMIT))
        .get()

      if (snap == null || snap.empty) {
        return []
      }

      return snap.docs.map((doc) => spreadDoc(doc) as Activity)
    }

  /**
   * Update activity for the given id
   */
  static update
    : (id: string, fields: object) => promiseWrite
    = (id, fields) => (
      collection.doc(id).update(fields)
    )
}

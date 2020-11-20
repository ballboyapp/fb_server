import { Id, queryDocData, docData } from '../types'

export const spreadDoc
  : (doc: queryDocData | docData) => Id
  = (doc) => ({ id: doc.id, ...doc.data() })

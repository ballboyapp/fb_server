import { queryDocData, docData } from '../types'

type fn = (doc: queryDocData | docData) => { id: string } // TODO: add extra fields

const spreadDoc: fn = (doc) => ({ id: doc.id, ...doc.data() })

export { spreadDoc }

import { Id, queryDocData, docData } from '../types'

type fn = (doc: queryDocData | docData) => Id

const spreadDoc: fn = (doc) => ({ id: doc.id, ...doc.data() })

export { spreadDoc }

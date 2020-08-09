import admin from 'firebase-admin'

const spreadDoc = (doc: admin.firestore.QueryDocumentSnapshot<admin.firestore.DocumentData>): { id: string } => (
  { id: doc.id, ...doc.data() }
)

export {
  spreadDoc,
}

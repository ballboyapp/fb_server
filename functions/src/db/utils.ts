import admin from 'firebase-admin'

const spreadDoc: (
  doc:
    admin.firestore.QueryDocumentSnapshot<admin.firestore.DocumentData> |
    admin.firestore.DocumentSnapshot<admin.firestore.DocumentData>
) => { id: string }
  = (doc) => (
  { id: doc.id, ...doc.data() }
)

export {
  spreadDoc,
}

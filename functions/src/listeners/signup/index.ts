import { auth } from 'firebase-functions'
import { Users } from '../../db'

/**
 * Fires whenever a new user signs up via firebase auth
 */
const listenerSignup = auth.user().onCreate(async (user) => {
  console.log({ user: JSON.stringify(user) })
  // '{
  //   "uid":"TWkN4QEE0MbcalzJkg3GOLgAHlk2",
  //   "email":"federodes@gmail.com",
  //   "emailVerified":true,
  //   "displayName":"Fede Rodes",
  //   "photoURL":"https://lh3.googleusercontent.com/-wOuR0TtHSEw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucntQHVAd0waSnZaD3FqB4khgUSq2A/photo.jpg",
  //   "phoneNumber":null,
  //   "disabled":false,
  //   "passwordHash":null,
  //   "passwordSalt":null,
  //   "tokensValidAfterTime":null,
  //   "metadata":{
  //     "creationTime":"2020-08-15T12:49:52Z",
  //     "lastSignInTime":"2020-08-15T12:49:52Z"
  //   },
  //   "customClaims":{},
  //   "providerData":[{
  //     "displayName":"Fede Rodes",
  //     "email":"federodes@gmail.com",
  //     "photoURL":"https://lh3.googleusercontent.com/-wOuR0TtHSEw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucntQHVAd0waSnZaD3FqB4khgUSq2A/photo.jpg",
  //     "providerId":"google.com",
  //     "uid":"104444387946765856040"
  //   }]}'
  // }
  const doc = {
    uid: user.uid,
    email: user.email || '',
    emailVerified: user.emailVerified || false,
    disabled: user.disabled || false,
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    // providerId: user.providerData,
    // providerData: user.providerData,
  }

  await Users.set(user.uid, doc)
})

export {
  listenerSignup,
}

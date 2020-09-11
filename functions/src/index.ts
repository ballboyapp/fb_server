import admin from 'firebase-admin'
admin.initializeApp()
import express, { Express } from 'express'
import { https } from 'firebase-functions'
import cors from 'cors'
import { auth } from './middlewares'
import { gqlServer } from './graphql/server'

// // TODO
// const { CLIENT_URL } = process.env

const app: Express = express()

const isProduction = app.get('env') === 'production'
console.log({ isProduction })

// Setup cors
if (isProduction) {
  // if (CLIENT_URL == null) {
  //   throw new Error('CLIENT_URL is not defined')
  // }

  // // Enable the app to receive requests from the front end
  // app.use('*', cors({ origin: [CLIENT_URL] }))
  app.use('*', cors())

  // Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind a load balancer (Heroku)
  // app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // see https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1)
} else {
  // Enable the app to receive requests from the React app and Storybook when running locally
  app.use(cors())
}

// Parse auth token and set req.user.id
app.use(auth)

// Create Graphlql server
gqlServer(app)

// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/graphql/
const graphql = https.onRequest(app)

export {
  graphql,
}

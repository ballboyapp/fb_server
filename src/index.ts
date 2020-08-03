import express, { Express } from 'express';
import admin from 'firebase-admin';
import { https } from 'firebase-functions';
import cors from 'cors';
// import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares'
import { gqlServer } from './graphql/server';

admin.initializeApp();

const app: Express = express();
const isProduction = app.get('env') === 'production';
console.log({ isProduction });

app.use(cors);
// app.use(cookieParser);
app.use(authMiddleware);

gqlServer(app);

// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/graphql/
const graphql = https.onRequest(app);

export { graphql };

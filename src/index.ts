import express, { Application } from 'express';
import { https } from 'firebase-functions';
import { gqlServer } from './graphql/server';

const app: Application = express();
gqlServer(app);

// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/graphql/
const graphql = https.onRequest(app);

export { graphql };

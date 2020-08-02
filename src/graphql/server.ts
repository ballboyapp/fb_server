import { Application, Request } from 'express';
import { ApolloServer } from 'apollo-server-express';
// import get from 'lodash/get';
import schema from './schema';
import resolvers from './resolvers';
// import { User } from '../models';
// const {
//   genUserModel,
//   genCityModel,
//   genSpotModel,
//   genActivityModel,
//   genNotificationsListModel,
//   genChatRoomsModel,
// } = require('../connectors');

const gqlServer = (app: Application): void => {
  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    // schema,
    context: async ({ req: Request }) => {
      // User data is decoded on the validateJwtMiddleware
      // const usr = req.user && req.user._id
      //   ? await User.findOne({ _id: req.user._id })
      //   : null;

      // TODO: disable in production
      // const usr = await User.findOne({});
      // console.log({ loggedInUser: get(usr, 'profile.username', 'unknown') });

      return {
        // usr,
        // models: {
        //   User: genUserModel({ usr }),
        //   City: genCityModel({ usr }),
        //   Spot: genSpotModel({ usr }),
        //   Activity: genActivityModel({ usr }),
        //   NotificationsList: genNotificationsListModel({ usr }),
        //   ChatRooms: genChatRoomsModel({ usr }),
        // },
      };
    },
    introspection: true,
    playground: true
  });

  // TODO: setup cors on index.ts
  apolloServer.applyMiddleware({ app, path: '/', cors: true });
}

export { gqlServer };

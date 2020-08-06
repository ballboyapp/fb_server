import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
// import get from 'lodash/get';
// import { AuthRequest } from '../types'
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

const gqlServer = (app: Express): void => {
  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    // schema,
    context: async ({ req: AuthRequest }): Promise<{}> => {
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

  apolloServer.applyMiddleware({ app, path: '/' });
}

export { gqlServer };

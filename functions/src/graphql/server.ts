import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
// import get from 'lodash/get';
import schema from './schema';
import resolvers from './resolvers';
import * as Users from '../db/users'
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
    context: async ({ req }): Promise<{}> => {
      // User data is decoded using the auth middleware
      const me = req?.user?.uid
        ? await Users.findById(req.user.uid)
        : null

      // TODO: disable in production
      // const me = await Users.findOne()
      // console.log({ loggedInUser: get(me, 'profile.username', 'unknown') });

      return {
        me,
        // models: {
        //   User: genUserModel({ me }),
        //   City: genCityModel({ me }),
        //   Spot: genSpotModel({ me }),
        //   Activity: genActivityModel({ me }),
        //   NotificationsList: genNotificationsListModel({ me }),
        //   ChatRooms: genChatRoomsModel({ me }),
        // },
      };
    },
    introspection: true,
    playground: true
  });

  apolloServer.applyMiddleware({ app, path: '/' });
}

export { gqlServer };

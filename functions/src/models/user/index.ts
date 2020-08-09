import { Ctx } from '../../types'
import { updateUser } from './update-user'
// const signup = require('./signup');
// const login = require('./login');
// const sendPasscode = require('./send-passcode');
// const validatePasscode = require('./validate-passcode');
// const updateUser = require('./update-user');
// const getPrivateUser = require('./get-private-user');
// const getPublicUser = require('./get-public-user');
// const getPublicUsers = require('./get-public-users');

/**
 * @see {@link https://blog.apollographql.com/authorization-in-graphql-452b1c402a9}
 * @see {@link https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/github/models.js}
 * @see {@link https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/index.js#L67-L73}
 * @see {@link https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/sql/schema.js#L63}
 */

const genUserModel: (ctx: Ctx) => object = (ctx) => ({
  // signup: args => signup(ctx, args),
  // login: args => login(ctx, args),
  // sendPasscode: args => sendPasscode(ctx, args),
  // validatePasscode: args => validatePasscode(ctx, args),
  updateUser: (args: object) => updateUser(ctx, args),
  // getPrivateUser: args => getPrivateUser(ctx, args),
  // getPublicUser: args => getPublicUser(ctx, args),
  // getPublicUsers: args => getPublicUsers(ctx, args),
})

export {
  genUserModel,
}

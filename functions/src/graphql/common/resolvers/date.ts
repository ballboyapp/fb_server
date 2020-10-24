/**
 * Date resolver
 * @summary In all our models we're using the default Date data type. As Apollo
 * basically only supports strings and numbers to be transported, we define a
 * new scalar which is basically another type.
 * @see {@link https://janikvonrotz.ch/2016/10/09/graphql-with-apollo-meteor-and-react/}
 */
export const DateScalar: object = {
  // Value from the client
  __parseValue: (value: any) => new Date(value),
  // Value sent to the client
  __serialize: (value: any) => value.toISOString(),
  __parseLiteral: (ast: any) => ast.value,
}

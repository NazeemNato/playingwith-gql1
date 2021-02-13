const graphql = require('graphql')
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList, } = graphql
const userData = require('../data/MOCK_DATA.json')
const UserType = require('./typedef/userType')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return userData
            }
        }
    }
})

const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: {type: GraphQLString}
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    password: args.password
                })
                return args
            }
        }
    }
})
const schema = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutations
})

module.exports = schema
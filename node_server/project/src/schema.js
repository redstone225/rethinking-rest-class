const graphql = require('graphql');

const UserType = new graphql.GraphQLObjectType({
    name:'User',
    fields: {
        id: {
            type: graphql.GraphQLID,
            resolve(user){
                return user.id;
            }
        }
    },
    username: {
        type:graphql.GraphQLString,
        resolve(user)
    }


});
const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: graphql.GraphQLList(UserType),
            resolve(){
                return [{{id:1, username:'user 1'}, {id:2, username:'user 2'};
            }
        }
    }
});

const schema = new graphql.GraphQLSchema({query: queryType});
module.exports = schema;

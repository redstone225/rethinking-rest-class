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
    }


});
const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: graphql.GraphQLString,
            resolve(){
                return 'world';
            }
        }
    }
});

const schema = new graphql.GraphQLSchema({query: queryType});
module.exports = schema;

import { ApolloServer, gql } from 'apollo-server';

let users = [
  {
    username: 'Jesus Rodrigo',
    boleta: '202132834',
    gmail: 'jesusrodrigo881@gmail.com',
    type_user: 'Student',
    id: '4353453453453434'
  },
  {
    username: 'Noe Jasiel',
    boleta: '202132834',
    gmail: 'noesilvido@gmail.com',
    type_user: 'Student',
    id: '43534534543534434'
  }
];

const typeDefs = gql`
  type User {
    username: String!
    boleta: String!
    gmail: String!
    type_user: String!
    id: ID!
  }

  type Query {
    userCount: Int!
    allUsers: [User!]!
    findUser(name: String!): User 
  }
`;

const resolvers = {
  Query: {
    userCount: () => users.length,
    allUsers: () => users,
    findUser: (root, args) =>
      users.find( u => u.username === args.name)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
})
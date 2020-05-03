import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    createdAt: Date!
    updatedAt: Date
    email: String!
    username: String!
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): Boolean!
    userUpdate(username: String): User
  }
`;
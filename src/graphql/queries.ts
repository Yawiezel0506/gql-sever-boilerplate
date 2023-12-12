import { gql } from "apollo-server-express";
import {
  productsTypes,
  productsQuery,
  productsMutation,
} from "../endpoints/products/schemas";
import {
  usersQuery,
  usersMutation,
  usersType,
} from "../endpoints/users/schemas";
import { productResolvers } from "../endpoints/products/resolvers";
import { UsersResolvers } from "../endpoints/users/resolvers";

export const typeDefs = gql`
  ${usersType}
  ${productsTypes}
  
  type Query {
    ${productsQuery}
    ${usersQuery}
  }

  type Mutation {
    ${productsMutation}
    ${usersMutation}
  }
`;

export const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...UsersResolvers.Query,
  },
  Mutation: {
    ...productResolvers.Mutation,
    ...UsersResolvers.Mutation,
  },
};

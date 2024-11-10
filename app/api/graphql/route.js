import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { NextResponse } from "next/server";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, GraphQL!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export async function GET(request) {
  const handler = startServerAndCreateNextHandler(server);
  return handler(request);
}

export async function POST(request) {
  const handler = startServerAndCreateNextHandler(server);
  return handler(request);
}

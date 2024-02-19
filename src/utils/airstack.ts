import { GraphQLClient } from "graphql-request";

const AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY;

export const graphQLClient = new GraphQLClient(AIRSTACK_API_URL, {
  headers: {
    Authorization: AIRSTACK_API_KEY,
  },
});


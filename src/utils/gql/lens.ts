import { GraphQLClient } from "graphql-request";

const AIRSTACK_API_URL = "https://api-v2.lens.dev/";

export const lensGraphQLClient = new GraphQLClient(AIRSTACK_API_URL);


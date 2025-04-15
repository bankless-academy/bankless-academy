import { GraphQLClient } from "graphql-request";

const LENS_API_URL = "https://api-v2.lens.dev/";

export const lensGraphQLClient = new GraphQLClient(LENS_API_URL);


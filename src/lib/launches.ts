import { GraphQLClient } from "graphql-request";
import { GetLaunchesQuery } from "@graphqlTypes/__types__";
import { gql } from "graphql-request";

const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      links {
        mission_patch_small
        mission_patch
      }
      launch_year
      rocket {
        rocket_name
      }
      id
    }
  }
`;

const client = new GraphQLClient('https://api.spacex.land/graphql/', { fetch: fetch });

export default async function getLaunches() {
    const launches: GetLaunchesQuery = await client.request(GET_LAUNCHES, { limit: 2 });

    return launches;
}


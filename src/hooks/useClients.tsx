import {useQuery} from 'react-query';
import { request, gql } from "graphql-request";


const endpoint = "https://test-task.expane.pro/api/graphql";

export default function useClients() {
    return useQuery("", async () => {
      const data = await request(
        endpoint,
        gql`
          query {
            getClients {
              id
              firstName
              lastName
              phone
              avatarUrl
            }
          }
        `
      );
      return data;
    });
  }

  
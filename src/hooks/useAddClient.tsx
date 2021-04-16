import {useMutation} from 'react-query';
import { request, gql } from "graphql-request";


const endpoint = "https://test-task.expane.pro/api/graphql";

export default function useAddClient() {
    return useMutation(async () => {
      const data = await request(
        endpoint,
        gql`
          mutation {
            addClient ($firstName: String!, $lastName: String!, $phone: String!, $avatarUrl: String!){
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

  
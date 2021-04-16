import { request, gql } from "graphql-request";
const endpoint = "https://test-task.expane.pro/api/graphql";

export const addNewClient = async(newClient: any) => {
    const data = await request(
        endpoint,
        gql`
        mutation {
            addClient(firstName: "${newClient.firstName}", lastName: "${newClient.lastName}", phone: "${newClient.phone}", avatarUrl: "${newClient.avatarUrl}") {
              firstName
              lastName
              phone
              avatarUrl
            }
          }
        `
      );

      return data;
}

export const updateClient = async(newClient: any) => {
    const data = await request(
        endpoint,
        gql`
        mutation {
            updateClient(id: ${newClient.id}, firstName: "${newClient.firstName}", lastName: "${newClient.lastName}", phone: "${newClient.phone}", avatarUrl: "${newClient.avatarUrl}") {
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
}
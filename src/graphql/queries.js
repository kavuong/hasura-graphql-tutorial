import { gql } from "@apollo/client";

export const INTRO_QUERY = gql`
  {
    person {
      name
      biography
    }
  }
`;

export const ORG_QUERY = gql`
  {
    organizations {
      involvement
      name
      picture_url
    }
  }
`;

export const MUTATE_QUERY = gql`
  mutation($biography: String, $name: String) {
    update_person(
      where: { name: { _eq: "James Do" } }
      _set: { biography: $biography, name: $name }
    ) {
      returning {
        name
        biography
      }
    }
  }
`;

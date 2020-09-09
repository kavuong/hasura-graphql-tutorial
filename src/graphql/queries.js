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
  mutation($biography: String, $name: String, $oldName: String) {
    update_person(
      where: { name: { _eq: $oldName } }
      _set: { biography: $biography, name: $name }
    ) {
      returning {
        name
        biography
      }
    }
  }
`;

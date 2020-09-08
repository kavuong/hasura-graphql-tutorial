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

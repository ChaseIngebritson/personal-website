/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactMessage = /* GraphQL */ `
  query GetContactMessage($id: ID!) {
    getContactMessage(id: $id) {
      id
      email
      name
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listContactMessages = /* GraphQL */ `
  query ListContactMessages(
    $filter: ModelContactMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContactMessages = /* GraphQL */ `
  query SyncContactMessages(
    $filter: ModelContactMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContactMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        name
        message
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

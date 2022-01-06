/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactMessage = /* GraphQL */ `
  mutation CreateContactMessage(
    $input: CreateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    createContactMessage(input: $input, condition: $condition) {
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
export const updateContactMessage = /* GraphQL */ `
  mutation UpdateContactMessage(
    $input: UpdateContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    updateContactMessage(input: $input, condition: $condition) {
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
export const deleteContactMessage = /* GraphQL */ `
  mutation DeleteContactMessage(
    $input: DeleteContactMessageInput!
    $condition: ModelContactMessageConditionInput
  ) {
    deleteContactMessage(input: $input, condition: $condition) {
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

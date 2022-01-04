import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ContactMessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ContactMessage {
  readonly id: string;
  readonly email?: string;
  readonly name?: string;
  readonly message?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ContactMessage, ContactMessageMetaData>);
  static copyOf(source: ContactMessage, mutator: (draft: MutableModel<ContactMessage, ContactMessageMetaData>) => MutableModel<ContactMessage, ContactMessageMetaData> | void): ContactMessage;
}
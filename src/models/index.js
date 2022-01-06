// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContactMessage } = initSchema(schema);

export {
  ContactMessage
};
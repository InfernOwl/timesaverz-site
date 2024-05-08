// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Suggestion } = initSchema(schema);

export {
  Suggestion
};
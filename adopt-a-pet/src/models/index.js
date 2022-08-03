// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Size = {
  "SMALL": "SMALL",
  "MEDIUM": "MEDIUM",
  "LARGE": "LARGE"
};

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { Owner, Pet } = initSchema(schema);

export {
  Owner,
  Pet,
  Size,
  Sex
};
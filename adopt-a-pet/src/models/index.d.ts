import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Size {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type OwnerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Owner {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Owner, OwnerMetaData>);
  static copyOf(source: Owner, mutator: (draft: MutableModel<Owner, OwnerMetaData>) => MutableModel<Owner, OwnerMetaData> | void): Owner;
}

export declare class Pet {
  readonly id: string;
  readonly name: string;
  readonly picture: string;
  readonly sex: Sex | keyof typeof Sex;
  readonly size: Size | keyof typeof Size;
  readonly description?: string | null;
  readonly owner?: Owner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly petOwnerId?: string | null;
  constructor(init: ModelInit<Pet, PetMetaData>);
  static copyOf(source: Pet, mutator: (draft: MutableModel<Pet, PetMetaData>) => MutableModel<Pet, PetMetaData> | void): Pet;
}
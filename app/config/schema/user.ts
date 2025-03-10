import { InferredSchemaType } from '@headless-adminapp/core/schema';
import { defineSchema } from '@headless-adminapp/core/schema/utils';

export const userSchema = defineSchema({
  logicalName: 'users',
  label: 'User',
  pluralLabel: 'Users',
  idAttribute: '_id',
  primaryAttribute: 'fullName',
  attributes: {
    _id: {
      type: 'id',
      label: 'ID',
      readonly: true,
      objectId: true,
      required: true,
    },
    fullName: {
      type: 'string',
      format: 'text',
      label: 'Full Name',
      required: true,
    },
    createdAt: {
      type: 'date',
      format: 'datetime',
      label: 'Created At',
      readonly: true,
      systemDefined: true,
    },
    updatedAt: {
      type: 'date',
      format: 'datetime',
      label: 'Updated At',
      readonly: true,
      systemDefined: true,
    },
    firstName: {
      type: 'string',
      format: 'text',
      label: 'First Name',
    },
    lastName: {
      type: 'string',
      format: 'text',
      label: 'Last Name',
    },
    email: {
      type: 'string',
      format: 'email',
      label: 'Email',
      required: true,
    },
    username: {
      type: 'string',
      format: 'text',
      label: 'Username',
      required: true,
    },
  },
});

export type UserAttributes = typeof userSchema.attributes;

export type User = InferredSchemaType<UserAttributes>;

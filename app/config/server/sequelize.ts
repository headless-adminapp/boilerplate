// Customize the Sequelize configuration as needed
// :: File can be removed if sequelize is not used

import { Sequelize } from 'sequelize';
import pg from 'pg';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    'Please define the DATABASE_URL environment variable inside .env.local'
  );
}

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg,
});

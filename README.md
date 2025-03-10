# Headless Admin App Boilerplate

This is a boilerplate for a headless admin app using Next.js and Fluent UI. It is a simple example of how to create a headless admin app that can be used to manage content in a headless CMS.

[Github](https://github.com/headless-adminapp/adminapp) |
[Documentation](https://headless-adminapp.github.io/) | [Examples](https://github.com/kishanmundha/headless-adminapp-examples)

## Setup

1. Clone the repository
2. Change into the project directory - See the customisation section below for more information on how to customise the project
3. Install the dependencies (`npm install` or `yarn install`)
4. Run the development server (`npm run dev` or `yarn dev`)
5. Open the app in your browser (`http://localhost:3000`)
6. Start managing your content!

## Customization and Configuration

- Copy `example.env.local` -> `.env.local` and update the values as required
- `app/api/login` - Update the login logic as per your requirements
- `app/api/me` - Update current user logic as per your requirements
- Add user record in `users` table in the database.

Currently boilerplate configured for mongoose. Change these places if you want to use other databases.

- `app/api/me` - Current authenticated user
- `app/api/login` - Login route
- `app/api/data` - A single endpoint to query data
- `app/config/serverSchemaStore.ts` - `SequelizeSchemaStore` or `MongooseSchemaStore` as per your database
- `app/config/server/sequelize.ts` - For Sequelize (Remove if you are not using Sequelize)
- `app/config/server/db-connect.ts` - For mongoose connect (Remove if you are using other databases)
- `app/config/server/types.ts` - Types for context if we want to use additional context

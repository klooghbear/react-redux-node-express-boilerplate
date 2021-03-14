# MY BOILER PLATE

## STACK

- React with Redux and Redux thunk
- Node/Express
- SQLite3 with knexORM
- SCSSS & HTML5
- RESTful conventions
- Webpack 4
- Babel for transpiler
- ESLINT

## COMMANDS

npm run dev

npm test

npm run create-migration _filename_ ==> npx knex migrate:make _filename_

npm run create-seed _filname_ ==> npx knex seed:make _filename_

npm run migrate ==> npx knex migratie:latest /- updates models to latest migration

npm run seed ==> npx knex seed:run /- populates the seed data within the table

npm run rollback ==> npx knex migrate:rollback /- remove maniuplation of tables

## DEPLOYMENT HEROKU

<p>Make sure to move devDependencies into dependencies and if deploying on heroku don't forget to configure SQLite3 to PostgreSQL</p>

### Happy coding!

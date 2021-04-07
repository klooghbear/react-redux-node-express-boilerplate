# REACT/REDUX AND NODE/EXPRESS BOILER PLATE

## TECH

- GitHub, Git
- React
- React-Router
- Redux & Redux Thunk
- Express
- Node.js & NPM
- KnexORM
- SQLite3
- SCSS
- WEBPACK
- BABEL

## COMMANDS

`npm run dev`

`npm test`

`npm run create-migration _filename_` ==> `npx knex migrate:make _filename_`

`npm run create-seed _filname_` ==> `npx knex seed:make _filename_`

`npm run migrate` ==> `npx knex migratie:latest` /- updates models to latest migration

`npm run seed` ==> `npx knex seed:run` /- populates the seed data within the table

`npm run rollback` ==> `npx knex migrate:rollback` /- remove maniuplation of tables

## DEPLOYMENT HEROKU

<p>
  Make sure to move devDependencies into dependencies and if deploying on heroku 
  don't forget to configure SQLite3 to PostgreSQL
</p>

### Happy coding!

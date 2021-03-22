const env = process.env.DEV_DB_URL | "./dev.sqlite3"

module.exports = {
  development: {
    client: "sqlite3",

    connection: env,

    migrations: {
      directory: __dirname + "/src/db/migrations"
    },

    seeds: {
      directory: __dirname + "/src/db/seeds"
    },

    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",

    connection: {
      database: "my_db",

      user: "username",

      password: "password"
    },

    pool: {
      min: 2,

      max: 10
    },

    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",

    connection: {
      database: "my_db",

      user: "username",

      password: "password"
    },

    pool: {
      min: 2,

      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
}

require("dotenv").config();
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./database/reservations.db3" },
  },
  production: {
    ...sharedConfig,
    connection: { filename: "./database/reservations.db3" },
  },
};

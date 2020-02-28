// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.sqlite3',
    },
    migrations: {
      directory: './migrations/',
    },
    seeds: {
      directory: './seeds/',
    },
  },
};

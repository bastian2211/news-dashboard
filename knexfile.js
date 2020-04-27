if (process.env.DATABASE_URL) {
  module.exports = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 100,
    },
  };
} else {
  require("dotenv").config();
  module.exports = {
    client: "mysql",
    connection: {
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    pool: {
      min: 1,
      max: 100,
    },
  };
}

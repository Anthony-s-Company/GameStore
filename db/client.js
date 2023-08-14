const { Client } = require("pg");

// const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/gamestore';
const user = "postgres";
const host = "localhost";
const database = "gamestore";
const port = "5432";
const password = "Aa19525295$";

const client = new Client({
  host,
  port,
  database,
  user,
  password,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;

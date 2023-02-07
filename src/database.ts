import pkg from "pg";
import * as dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();
const { DB_HOST, DB_NAME, DB_TEST_NAME, ENVIRONMENT, DB_USER, DB_PASS } =
  process.env;

let pool: any;
console.log(typeof ENVIRONMENT);
if (ENVIRONMENT?.trim() === "test") {
  pool = new Pool({
    host: DB_HOST,
    database: DB_TEST_NAME,
    user: DB_USER,
    password: DB_PASS,
  });
}

if (ENVIRONMENT?.trim() === "dev") {
  console.log(ENVIRONMENT);
  pool = new Pool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASS,
  });
}
export default pool;

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

console.log("Connecting to DB HOST:", process.env.DB_HOST);

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl: false,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log("PostgreSQL connected successfully");
    client.release();
  } catch (err) {
    console.error("PostgreSQL connection failed");
    console.error(err.message);
  }
})();

export default pool;

import pool from "../../config/db.js";

const findExistingUser = async ({ email, company_name, contact_no }) => {
  const query = `
    SELECT 
      CASE 
        WHEN email = $1 THEN 'email'
        WHEN company_name = $2 THEN 'company_name'
        WHEN contact_no = $3 THEN 'contact_no'
      END AS field
    FROM users
    WHERE email = $1
       OR company_name = $2
       OR contact_no = $3
    LIMIT 1
  `;

  const values = [email, company_name, contact_no];
  const { rows } = await pool.query(query, values);

  return rows[0];
};

const createUser = async ({
  name,
  company_name,
  email,
  password,
  contact_no
}) => {
  const query = `
    INSERT INTO users 
    (name, company_name, email, password, contact_no)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING user_company_id, name, company_name, email, contact_no, created_at
  `;

  const values = [name, company_name, email, password, contact_no];
  const { rows } = await pool.query(query, values);

  return rows[0];
};


const findUserForLogin = async ({ email, contact_no }) => {
  const query = `
    SELECT
      user_company_id,
      email,
      contact_no,
      password
    FROM users
    WHERE email = $1
       OR contact_no = $2
    LIMIT 1
  `;

  const values = [email || null, contact_no || null];
  const { rows } = await pool.query(query, values);

  return rows[0];
};

export default {
  findExistingUser,
  createUser,
  findUserForLogin
};

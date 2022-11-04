import { pool } from "../index.js"; // we are importing pool here so we can use it on this file to alter our tables.

export async function createAllTables() {
  // we have async function that is creating our table which we are exporting.
  // If you're unsure about CREATE TABLE IF NOT EXISTS, see: https://www.postgresql.org/docs/current/sql-createtable.html
  // If you're unsure about NOT NULL, see: https://www.postgresql.org/docs/current/ddl-constraints.html#id-1.5.4.6.6
  return await pool.query(
    // here we are waiting for the return of our query this is SQL CODE which is our query
    `CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      task VARCHAR(200) NOT NULL,
      completion_date TIMESTAMPTZ NOT NULL
    );
    
    INSERT INTO todos
      (task, completion_date)
    VALUES
      ('Walk the dog', '1999-01-08'),
      ('Feed the computer', '2015-01-10')
    ;`
  );
}

export async function dropAllTables() {
  // we are exporting the dropalltables function
  // If you're unsure about DROP TABLE, see: https://www.postgresql.org/docs/current/sql-droptable.html
  return await pool.query("DROP TABLE IF EXISTS todos;"); // waiting for return of query.
}

export async function resetAllTables() {
  const dropped = await dropAllTables(); //delete tables
  const created = await createAllTables(); //create tables
  return [dropped, created];
} // (this function is being exported to be used somewhere else) resetting by deleting all the tables & creating all the tables again.

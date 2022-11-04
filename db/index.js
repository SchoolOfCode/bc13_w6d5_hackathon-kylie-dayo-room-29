import pg from "pg"; // importing pg module which is interface which acts as interface so we can communicate with database.

const databaseUrl = process.env.DATABASE_URL; // here we are getting URL and hiding it in .env file.

if (undefined === databaseUrl) {
  throw new Error(
    "This project requires a database url. Did you forget to create a .env file? Please create one and ensure it contains a DATABASE_URL variable."
  );
} // checking there is a URL within .env file & that there is a .env file

export const pool = new pg.Pool({
  connectionString: databaseUrl,
}); // we are creating the connection. if database is defined create connection.
// we are exporting this pool (variable)

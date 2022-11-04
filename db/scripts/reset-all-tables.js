import { pool } from "../index.js"; // importing something from the this file.
import { resetAllTables } from "./helpers.js"; // here it is grabbing this function from this file & saying you can use it now.

try {
  await resetAllTables();
  console.log("Reset all tables"); // here we are checking to see if anything is wrong
} catch (err) {
  console.error(err); // if something is wrong throw an error message
} finally {
  await pool.end(); // will run regardless of output from try & catch but specifically here we closing the connection with pool.end with finally.
}

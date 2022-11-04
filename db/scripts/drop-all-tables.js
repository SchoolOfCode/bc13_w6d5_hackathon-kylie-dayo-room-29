import { pool } from "../index.js"; // we are importing something from this file here and defining what it is inside the destructured brackets.
import { dropAllTables } from "./helpers.js"; // // we importing dropalltables function from this file using the destructured brackets.

try {
  await dropAllTables();
  console.log("Dropped all tables"); // here we are checking with try to see if something is wrong
} catch (err) {
  console.error(err); // if something is wrong throw the error message or trigger something else like a function or anything.
} finally {
  await pool.end(); // this will always run regardless of the try & catch output.
}

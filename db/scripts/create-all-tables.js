import { pool } from "../index.js"; // we are not importing this variable pool from this file path.
import { createAllTables } from "./helpers.js"; // we now importing the function from this file.

try {
  await createAllTables(); //this is code block we are running to try
  // The try statement defines a code block to run (to try). if try block code returns an error or exception then catch block will executed.
  console.log("Created all tables");
} catch (err) {
  // The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. catch and try go hand in hand.
  console.error(err); //
} finally {
  await pool.end(); //will drain the pool of all active clients, disconnect them, and shut down any internal timers in the pool. It is common to call this at the end of a script using the pool or when your process is attempting to shut down cleanly.
}

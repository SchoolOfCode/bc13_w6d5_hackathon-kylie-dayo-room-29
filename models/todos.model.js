/**
 * Helper functions to interact with the "todos" table in the database.
 */

//MODELS module stores all of our functions
// you can multiple .js files in your model.

import { pool } from "../db/index.js";
// defining and exporting the function
export async function getAllTodos() {
  // storing the query in the variable
  const sqlQuery =
    "SELECT id, task, completion_date FROM todos ORDER BY completion_date ASC, id ASC;";
  const result = await pool.query(sqlQuery); // storing the query result  in the variable. you could also just put "SELECT id, task, completion_date FROM todos ORDER BY completion_date ASC, id ASC;";  straight inside the pool.query parameter.
  const todos = result.rows; // you can console log result to decide what you want to return using the . notation but here rows is a key inside result.
  return todos; // returning the value of todo or return result.rows
}

export async function createTodo(newTodo) {
  const sqlQuery =
    "INSERT INTO todos (task, completion_date) VALUES ($1, $2) RETURNING *;";
  const parameterValues = [newTodo.task, newTodo.completionDate];
  const result = await pool.query(sqlQuery, parameterValues);
  const created = result.rows[0];
  return created;
}

export async function deleteTodoById(todoId) {
  const sqlQuery = "DELETE FROM todos WHERE id = $1 RETURNING *;";
  const parameterValues = [todoId];
  const result = await pool.query(sqlQuery, parameterValues);
  const deleted = result.rows[0];
  return deleted;
}

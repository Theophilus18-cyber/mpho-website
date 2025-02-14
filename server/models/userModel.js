import {connection}  from "../config.js";

const getAllUsers = (callback) => {
  connection.query("SELECT * FROM users", callback);
};

const getUserById = (id, callback) => {
  connection.query("SELECT * FROM users WHERE id = ?", [id], callback);
};

const createUser = (user, callback) => {
  connection.query("INSERT INTO users SET ?", user, callback);
};

const deleteUser = (id, callback) => {
  connection.query("DELETE FROM users WHERE id = ?", [id], callback);
};

const saveUserWithUrl = (user, callback) => {
  console.log("Saving user:", user);  // Debugging log
  connection.query("INSERT INTO users SET ?", user, (err, results) => {
    if (err) {
      console.error("Database insertion error:", err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};



export default { getAllUsers, getUserById, createUser, deleteUser, saveUserWithUrl };

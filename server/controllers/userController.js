import userModel from "../models/userModel.js";
import {uploadFile}  from '../config.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
};

const getUserById = (req, res) => {
  userModel.getUserById(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.json(results[0] || {});
  });
};

const createUser = (req, res) => {
  userModel.createUser(req.body, (err, results) => {
    if (err) res.status(500).send(err);
    else res.status(201).json({ id: results.insertId, ...req.body });
  });
};

const deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    else res.status(204).send();
  });
};

const createUserWithImage = async (req, res) => {
  console.log("Received body:", req.body); 
  console.log("Received file:", req.file); 

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const { name, email } = req.body;
  const file = req.file;

  try {
    const imageUrl = await uploadFile(file.buffer, file.originalname, file.mimetype);
    console.log("Image uploaded to:", imageUrl);

    const newUser = { name, email, imageUrl };

    userModel.saveUserWithUrl(newUser, (err, results) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).send(err);
      } else {
        res.status(201).json({ id: results.insertId, ...newUser });
      }
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).send('Error uploading: ' + error.message);
  }
};

export default { getAllUsers, getUserById, createUser, deleteUser, createUserWithImage, upload };
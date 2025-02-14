import express from 'express';
import userController from '../controllers/userController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/users_image', upload.single('image'), userController.createUserWithImage);

export default router;
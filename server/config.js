import mysql from 'mysql';
import { put } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully.');
  }
});

const uploadFile = async (fileBuffer, fileName, mimeType) => {
  console.log("Uploading file:", fileName);

  try {
    const response = await put(fileName, fileBuffer, {
      contentType: mimeType,
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    console.log("File uploaded to:", response.url);
    return response.url;
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
}; 

export { connection, uploadFile };
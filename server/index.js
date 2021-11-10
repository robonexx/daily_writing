const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const articleRoute = require('./routes/articles');
const categoryRoute = require('./routes/categories');
const multer = require('multer');

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
  })
  .then(console.log('connected to mongoDB'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/server/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded...');
});

app.use('/server/auth', authRoute);
app.use('/server/users', userRoute);
app.use('/server/articles', articleRoute);
app.use('/server/categories', categoryRoute);

app.listen('5000', () => {
  console.log('backend is connected');
});

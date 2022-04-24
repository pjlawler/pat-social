const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'))

const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pat_social',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Test:Test123@cluster0.0jlv01o.mongodb.net/";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}

module.exports = connectToMongo;
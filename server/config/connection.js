const mongoose = require('mongoose');

console.log('barf')
console.log(process.env)

mongoose.connect(  process.env.MONGODB_URI || 'mongodb://localhost:27017/book_search',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
);

module.exports = mongoose.connection;

const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialButterflydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;


//define
const { connect, connection } = require("mongoose");

//define connection
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnet";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//export
module.exports = connection;

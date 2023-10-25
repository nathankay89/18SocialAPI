// Purpose: Connect to the Mongo DB
const { connect, connection } = require("mongoose");

// Connect to the Mongo DB
connect("mongodb://localhost:27017");

// Export the connection
module.exports = connection;
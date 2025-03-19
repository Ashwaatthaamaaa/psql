const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  connectionString: "postgresql://lunge:291152@localhost:5432/top_users",
});

const configureMiddleware = require("./app/middleware/common.middleware");
const configureRoutes = require("./app/routes/routes");
const configureMongoDb = require("./app/database/mongodb");

const chalk = require("chalk");
require("dotenv").config();
const app = require("express")();
const PORT = process.env.PORT || process.env.LOCAL_PORT;

configureMiddleware(app);
configureRoutes(app);
configureMongoDb();

app.listen(PORT, () => {
  console.log(chalk.blue(`GALLERIA LISTENING ON PORT ${PORT}`));
});

const chalk = require("chalk");

exports.getCollection = (req, res) => {
  console.log(chalk.blue("INDEX CONTROLLER GETCOLLECTION"));
  try {
    res.sendFile(process.env.INDEX);
  } catch (error) {
    throw error;
  }
};

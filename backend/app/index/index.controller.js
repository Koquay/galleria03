const chalk = require("chalk");

exports.getCollection = (req, res) => {
  try {
    res.sendFile(process.env.INDEX);
  } catch (error) {
    throw error;
  }
};

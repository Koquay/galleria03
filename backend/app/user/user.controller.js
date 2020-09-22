const userService = require("./user.service");

exports.login = async (req, res) => {
  try {
    await userService.login(req, res);
  } catch (error) {
    throw error;
  }
};

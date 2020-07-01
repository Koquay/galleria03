const userService = require("./user.service");

exports.login = async (req, res) => {
  console.log("req.body", req.body);
  try {
    await userService.login(req, res);
  } catch (error) {
    throw error;
  }
};

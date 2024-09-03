const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userId = user.id;
    } else {
      return res.json({ message: "Unautorized user" }).sendStatus(401);
    }
    next();
  } catch (error) {
    console.error(error);
    res.json({ message: "Unautorized user" }).sendStatus(401);
  }
};

module.exports = auth;

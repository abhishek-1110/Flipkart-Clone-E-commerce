import Jwt from "jsonwebtoken";
const jwt = Jwt;
const JWT_SECRET_KEY = "hi$hi";

export const fetchuser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(400).send({ error: "Token not found.." });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);

    req.user = data.user;

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valid token.." });
  }
};

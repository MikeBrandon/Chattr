const jwt = require("jsonwebtoken");

export const verifyResetToken = (req: any, res: any, next: any) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({msg: "A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_RESET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({msg: "Invalid Token"});
  }
  return next();
};

export const verifyJWTToken = (req: any, res: any, next: any) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({msg: "A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({msg: "Invalid Token"});
  }
  return next();
};
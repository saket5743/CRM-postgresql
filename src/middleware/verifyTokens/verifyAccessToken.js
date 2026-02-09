import jwt from "jsonwebtoken";
import responseObject from "../../utils/responseObject.js";

const verifyAccessToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authorization token missing");
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(
      token,
      process.env.NODE_ENV_ACCESS_TOKEN_SECRET
    );

    req.userdata = decoded.userdata;
    req.session_id = decoded.session_id;

    next();
  } catch (err) {
    const resResult = responseObject(
      { result: "Invalid or Expired Token" },
      true,
      "Failure",
      401
    );
    return res.status(resResult.statusCode).json(resResult);
  }
};

export default verifyAccessToken;

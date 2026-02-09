import userService from "../../service/user/login.service.js";
import responseObject from "../../utils/responseObject.js";

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);

    const resResult = responseObject(
      result,
      false,
      "Login successful",
      200
    );

    return res.status(resResult.statusCode).json(resResult);
  } catch (error) {
    const resResult = responseObject(
      { result: error.message },
      true,
      "Failure",
      400
    );

    return res.status(resResult.statusCode).json(resResult);
  }
};

export default {
  login
};

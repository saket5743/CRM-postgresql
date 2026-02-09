import userService from "../../service/user/user.service.js";
import responseObject from "../../utils/responseObject.js";

const signUp = async (req, res) => {
  try {
    const user = await userService.signUp(req.body);

    const resResult = responseObject(
      user,
      false,
      "User registered successfully",
      201
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
  signUp
};

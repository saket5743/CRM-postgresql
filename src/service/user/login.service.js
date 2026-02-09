import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../models/user/user.model.js";

const login = async (payload) => {
  const { email, contact_no, password } = payload;

  if ((!email && !contact_no) || !password) {
    throw new Error("Email or contact number and password are required");
  }

  const user = await userModel.findUserForLogin({
    email,
    contact_no
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      user_company_id: user.user_company_id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d"
    }
  );

  return {
    user_company_id: user.user_company_id,
    email: user.email,
    contact_no: user.contact_no,
    token
  };
};

export default {
  login
};

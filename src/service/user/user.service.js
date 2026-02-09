import bcrypt from "bcryptjs";
import userModel from "../../models/user/user.model.js";

const signUp = async (payload) => {
  const { name, email, company_name, contact_no, password } = payload;

  if (
    !name ||
    !email ||
    !company_name ||
    !contact_no ||
    !password
  ) {
    throw new Error("All fields are required");
  }

  const existing = await userModel.findExistingUser({
    email,
    company_name,
    contact_no
  });

  if (existing) {
    let message = "";

    switch (existing.field) {
      case "email":
        message = "Email already registered";
        break;
      case "company_name":
        message = "Company name already exists";
        break;
      case "contact_no":
        message = "Contact number already registered";
        break;
      default:
        message = "User already exists";
    }

    throw new Error(message);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return userModel.createUser({
    ...payload,
    password: hashedPassword
  });
};

export default {
  signUp
};

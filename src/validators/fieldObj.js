const fieldObj = {
  "/api/v1/user/signUp": {
    validatorKeys: {
      name: "string",
      company_name: "string",
      email: "email",
      password: "password",
      contact_no: "contact"
    }
  },

  "/api/v1/user/login": {
    validatorKeys: {
      email: "email",
      password: "password",
      contact_no: "contact"
    }
  },

  // "/common/user/updateUserDetails": {
  //   validatorKeys: {
  //     user_id: "isValidGUID",
  //     name: "string",
  //     email: "email",
  //     is_active: "boolean"
  //   }
  // }
};

export default fieldObj;

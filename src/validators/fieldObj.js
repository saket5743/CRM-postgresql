const fieldObj = {
  "/api/v1/signUp": {
    validatorKeys: {
      name: "string",
      company_name: "string",
      email: "email",
      password: "password",
      contact_no: "contact"
    }
  },

  // "/customerCompany/customer-company/insertCustomerCompanyRecordDetails": {
  //   validatorKeys: {
  //     user_id: "isValidGUID",
  //     user_company_id: "isValidGUID",
  //     customer_company_name: "string",
  //     contact: "contact"
  //   }
  // },

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

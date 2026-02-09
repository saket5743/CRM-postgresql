// EMAIL
const email = (value) => {
  const regEx =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
  return regEx.test(value) ? false : "Invalid Email";
};

// CONTACT (India)
const contact = (value) => {
  const regEx = /^[6-9]\d{9}$/;
  return regEx.test(value) ? false : "Invalid Contact";
};

// PASSWORD
const password = (value) => {
  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return regEx.test(value) ? false : "Invalid Password";
};

// STRING
const string = (value) => {
  if (typeof value !== "string" || value.trim() === "") {
    return "Invalid String";
  }
  return false;
};

// NUMBER
const number = (value) => {
  return /^-?\d+(\.\d+)?$/.test(value.toString())
    ? false
    : "Invalid Number";
};

// BOOLEAN
const boolean = (value) => {
  if (
    typeof value !== "boolean" &&
    value !== "true" &&
    value !== "false"
  ) {
    return "Invalid Boolean";
  }
  return false;
};

// UUID
const isValidGUID = (value) => {
  const regEx =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return regEx.test(value) ? false : "Invalid Unique Identifier";
};

// DATE YYYY-MM-DD
const validateISODate = (value) => {
  const regEx =
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  return regEx.test(value) ? false : "Invalid Date Format";
};

export default {
  email,
  contact,
  password,
  string,
  number,
  boolean,
  isValidGUID,
  validateISODate
};

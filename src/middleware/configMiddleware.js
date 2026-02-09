import fieldObj from "../validators/fieldObj.js";
import validators from "../validators/index.js";
import responseObject from "../utils/responseObject.js";

export default (req, res, next) => {
  try {
    const path = req.originalUrl
      .replace(/^\/api\/v1/, "")
      .split("?")[0];

    const routeConfig = fieldObj[path];

    if (!routeConfig || !routeConfig.validatorKeys) {
      return next();
    }

    const errors = [];
    const data = {
      ...req.body,
      ...req.query,
      ...req.params
    };

    for (const key in routeConfig.validatorKeys) {
      const validatorName = routeConfig.validatorKeys[key];
      const value = data[key];

      if (value === undefined || value === null || value === "") {
        errors.push(`${key} is required`);
        continue;
      }

      const validatorFn = validators[validatorName];

      if (!validatorFn) {
        errors.push(`Validator not found: ${validatorName}`);
        continue;
      }

      const error = validatorFn(value);
      if (error) {
        errors.push(`${key}: ${error}`);
      }
    }

    if (errors.length > 0) {
      const resResult = responseObject(
        { errors },
        true,
        "Validation Failed",
        400
      );
      return res.status(resResult.statusCode).json(resResult);
    }

    next();
  } catch (err) {
    const resResult = responseObject(
      { result: err.message },
      true,
      "Validation Error",
      500
    );
    return res.status(resResult.statusCode).json(resResult);
  }
};

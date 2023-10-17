import { body, validationResult } from "express-validator";

export const planValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 6 })
    .withMessage("Description must be at least 6 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

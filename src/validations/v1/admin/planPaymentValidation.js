import { body, validationResult } from "express-validator";

export const planPaymentValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2 })
    .withMessage("Title must be at least 2 characters long")
    .isString()
    .withMessage("Title must be a string"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("amount").isNumeric().withMessage("Amount must be a number"),

  body("type")
    .notEmpty()
    .withMessage("Type is required")
    .isString()
    .withMessage("Type must be a string"),

  body("discount").isNumeric().withMessage("Discount Amount must be a number"),

  body("monthlyPlanId")
    .isNumeric()
    .withMessage("Monthly Plan Id must be a number"),

  body("annuallyPlanId")
    .isNumeric()
    .withMessage("Annually Plan Id must be a number"),

  body("monthlyAmount")
    .isNumeric()
    .withMessage("Monthly Amount must be a number"),

  body("annuallyAmount")
    .isNumeric()
    .withMessage("Annually Amount must be a number"),

  body("features.paragraphWordCount")
    .notEmpty()
    .withMessage("Paragraph Word Count is required")
    .isInt({ min: 0 })
    .withMessage("Paragraph Word Count must be a positive integer"),

  body("features.paragraphMode")
    .notEmpty()
    .withMessage("Paragraph Mode is required")
    .isString()
    .withMessage("Paragraph Mode must be a string"),

  body("features.paragraphSynonymSlider")
    .notEmpty()
    .withMessage("Paragraph Synonym Slider is required")
    .isString()
    .withMessage("Paragraph Synonym Slider must be a string"),

  body("features.paragraphFreezeWord")
    .notEmpty()
    .withMessage("Paragraph Freeze Word is required")
    .isInt({ min: 0 })
    .withMessage("Paragraph Freeze Word must be a positive integer"),

  body("features.summarizerWordCount")
    .notEmpty()
    .withMessage("Summarizer Word Count is required")
    .isInt({ min: 0 })
    .withMessage("Summarizer Word Count must be a positive integer"),

  body("features.summarizerProcessingSpeed")
    .notEmpty()
    .withMessage("Summarizer Processing Speed is required")
    .isString()
    .withMessage("Summarizer Processing Speed must be a string"),

  body("features.rewritesRecommended")
    .notEmpty()
    .withMessage("Rewrites Recommended is required")
    .isBoolean()
    .withMessage("Rewrites Recommended must be a boolean"),

  body("features.modesComparison")
    .notEmpty()
    .withMessage("Modes Comparison is required")
    .isBoolean()
    .withMessage("Modes Comparison must be a boolean"),

  body("features.plagiarismChecker")
    .notEmpty()
    .withMessage("Plagiarism Checker is required")
    .isBoolean()
    .withMessage("Plagiarism Checker must be a boolean"),

  body("features.toneInsight")
    .notEmpty()
    .withMessage("Tone Insight is required")
    .isBoolean()
    .withMessage("Tone Insight must be a boolean"),

  body("features.paraphraserHistory")
    .notEmpty()
    .withMessage("Paraphraser History is required")
    .isBoolean()
    .withMessage("Paraphraser History must be a boolean"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

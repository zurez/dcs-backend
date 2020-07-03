import { body, param } from "express-validator";

export const postMetricValidator = [
  body("value").exists(),
  body("value").isFloat(),
  param("key").exists(),
];

export const getMetricValidator = [param("key").exists()];

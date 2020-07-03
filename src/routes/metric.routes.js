import MetricController from "../controllers/metric.controller";
import { validator } from "express-validator";
import {
  postMetricValidator,
  getMetricValidator,
} from "../validators/metric.validator";

const { Router } = require("express");

const routes = Router();
const controller = new MetricController();

routes.post("/:key", postMetricValidator, controller.postMetricSum);

routes.get("/:key/sum", getMetricValidator, controller.getMetricSum);

export default routes;

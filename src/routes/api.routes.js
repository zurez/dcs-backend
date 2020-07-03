import { Router } from "express";
import MetricRoutes from "./metric.routes";

const routes = Router();

routes.use("/metric", MetricRoutes);
export default routes;

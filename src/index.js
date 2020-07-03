import express from "express";
import ApiRoutes from "./routes/api.routes";
import bodyParser from "body-parser";
import helmet from "helmet";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", ApiRoutes);

if (!module.parent) {
  app.listen(PORT);
}

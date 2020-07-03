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
// https://stackoverflow.com/questions/53048642/node-js-handle-body-parser-invalid-json-error
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.sendStatus(400);
  }

  next();
});
if (!module.parent) {
  app.listen(PORT);
}

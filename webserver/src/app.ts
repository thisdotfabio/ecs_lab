import express, { Application } from "express";
import bodyParser from "body-parser";

import { home } from "./home";
import { heathcheck } from "./healthcheck";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", home);
app.get("/status", heathcheck);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
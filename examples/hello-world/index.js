import Handlebars from "handlebars";
import * as fs from "fs";
const template = Handlebars.compile(
  fs.readFileSync("./template.handlebars", "utf-8")
);
const result = template({ method_name: "foo", param1: "a", param2: "b" });
fs.writeFileSync("result.js", result);

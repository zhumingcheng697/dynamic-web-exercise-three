const express = require("express");
const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

const app = express();
const port = 4000;

app.use("/static", express.static("public"));

app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log("Exercise Three is running"));

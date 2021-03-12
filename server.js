const path = require("path");
const express = require("express");
const app = express();

app.use(express.state(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 8080);

const server = app.listen(app.get("port"), () => {
  console.log("listening on post ", server.address().port);
});

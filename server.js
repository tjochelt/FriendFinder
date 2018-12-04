const express = require("express"),
  app = express();
// const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("routes/apiRoutes")(app);
require("routes/htmlRoutes")(app);

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

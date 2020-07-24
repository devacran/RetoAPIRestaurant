const express = require("express");
const menuApi = require("./routes/menu");
const app = express();

//routes
menuApi(app);
app.listen(8080, () => {
  console.log("Listening on port 8080");
});

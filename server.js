const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;
require("dotenv").config()

// Serve static content for the app from the "public" directory in the application directory.
// (html allower)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

  // INDEX HTML
//   app.get("/", function (req, res) {
//     res.sendFile("/index.html");
// });

require("./serverFiles/routes/html.routes")(app)
// require('./serverFiles/routes/api.routes')(app)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
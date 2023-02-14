// html routes
const path = require("path");

// ROUTES

module.exports = function (app) {
    // INDEX HTML
    app.get("/dashboard", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    });

    // Goals - Daily View
    app.get("/dashboard/day/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/goalpageviews/day.html"));
    });
      
    app.get("/dashboard/day/:date", function (req, res) {
        let date = req.params.date;
        res.sendFile(path.join(__dirname, `../../public/goalpageviews/day-${date}.html`));
    })

     // Goals - Weekly View
     app.get("/dashboard/week", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/goalpageviews/week.html"));
    });

      // Goals - Monthly View
      app.get("/dashboard/month", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/goalpageviews/month.html"));
    });

     // Goals - Yearly View
     app.get("/dashboard/year", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/goalpageviews/year.html"));
    });

    // smart goal generator
    app.get("/smartgoals", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/smartGoals.html"));
    });
};



// CALL DOTENV WHEN IN DEVELOPMENT
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// MODULES
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("views", path.join(__dirname, "/src/views"));
app.set("layout", "layouts/base");
app.set("layout extractScripts", true);
app.use(express.static(path.join(__dirname, "/public")));

// ROUTES
app.get("/", (req, res) => {
  res.end("hello world");
});

// LISTENING PORT
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));

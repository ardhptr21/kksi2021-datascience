// CALL DOTENV WHEN IN DEVELOPMENT
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// MODULES
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path");
const routes = require("./src/routes");

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

// CALL ALL CONFIGS
require("./src/configs/mongoose.config");

// ROUTES
app.use("/", routes.pages);
app.use("/video", routes.video);
app.use("/file", routes.file);
app.use("/admin", routes.admin);

// LISTENING PORT
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));

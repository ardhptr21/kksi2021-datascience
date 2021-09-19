// CALL DOTENV WHEN IN DEVELOPMENT
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// MODULES
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path");
const flash = require("express-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const passport = require("passport");

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
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser(process.env.SECRET_SESSION));
app.use(flash());
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());

// CALL ALL CONFIGS
require("./src/configs/mongoose.config");
require("./src/configs/passport.config");

// ROUTES
app.use("/video", routes.video);
app.use("/file", routes.file);
app.use("/link", routes.link);
app.use("/admin", routes.admin);
app.use("/auth", routes.auth);
app.use("/", routes.pages);
app.get("*", (req, res) => res.render("error/404", { navbar: "no" }));

// LISTENING PORT
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));

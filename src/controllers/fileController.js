const File = require("../models/File");

module.exports.index = (req, res) => {
  File.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("file/index", { files: result });
  });
};

module.exports.form = (req, res) => {
  res.render("file/form");
};

module.exports.store = (req, res) => {
  const { url, title, description } = req.body;
  File.create(
    {
      url,
      title,
      description,
    },
    (err) => {
      if (err) {
        console.log(err);
        req.flash("error", "Failed create new file url");
      } else {
        req.flash("success", "Successfully create new file url");
      }
      res.redirect("/admin/file");
    }
  );
};

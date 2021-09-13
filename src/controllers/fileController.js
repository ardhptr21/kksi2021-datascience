const File = require("../models/File");

module.exports.index = (req, res) => {
  File.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("file/index", { files: result });
  });
};

module.exports.create = (req, res) => {
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

module.exports.edit = (req, res) => {
  File.findById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("file/form", { data: result });
  });
};

module.exports.update = (req, res) => {
  const { url, title, description } = req.body;
  File.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        url,
        title,
        description,
      },
    },
    (err) => {
      if (err) {
        console.log(err);
        req.flash("error", "Failed update file url");
      } else {
        req.flash("success", "Successfully update file url");
      }
      res.redirect("/admin/file");
    }
  );
};

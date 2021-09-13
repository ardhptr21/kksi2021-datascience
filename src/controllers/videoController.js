const Video = require("../models/Video");

module.exports.index = (req, res) => {
  Video.find((err, result) => {
    if (err) {
      console.log(err);
    }

    res.render("video/index", { videos: result });
  });
};

module.exports.form = (req, res) => {
  res.render("video/form");
};

module.exports.store = (req, res) => {
  const { url, title, description } = req.body;
  Video.create(
    {
      url,
      title,
      description,
    },
    (err) => {
      if (err) {
        console.log(err);
        req.flash("error", "Failed create new video url");
      } else {
        req.flash("success", "Successfully create new video url");
      }
      res.redirect("/admin/video");
    }
  );
};

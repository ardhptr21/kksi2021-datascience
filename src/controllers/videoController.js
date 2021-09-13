const Video = require("../models/Video");

module.exports.index = (req, res) => {
  Video.find((err, result) => {
    if (err) {
      console.log(err);
    }

    res.render("video/index", { videos: result });
  });
};

module.exports.create = (req, res) => {
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

module.exports.edit = (req, res) => {
  Video.findById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("video/form", { data: result });
  });
};

module.exports.update = (req, res) => {
  const { url, title, description } = req.body;
  Video.findByIdAndUpdate(
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
        req.flash("error", "Failed update video url");
      } else {
        req.flash("success", "Successfully update video url");
      }
      res.redirect("/admin/video");
    }
  );
};

module.exports.remove = (req, res) => {
  Video.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
      req.flash("error", "Failed delete video url");
    } else {
      req.flash("success", "Successfully delete video url");
    }
    res.redirect("/admin/video");
  });
};

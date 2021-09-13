const File = require("../models/File");
const Video = require("../models/Video");

module.exports.index = (req, res) => {
  res.render("admin/index");
};

module.exports.video = (req, res) => {
  Video.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("admin/video", { videos: result });
  });
};

module.exports.file = (req, res) => {
  File.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("admin/file", { files: result });
  });
};

const File = require("../models/File");
const Video = require("../models/Video");
const Link = require("../models/Link");

module.exports.index = (req, res) => {
  res.render("admin/index", { title: "Admin Panel" });
};

module.exports.video = (req, res) => {
  Video.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("admin/video", { videos: result, title: "Admin Panel - Video" });
  });
};

module.exports.file = (req, res) => {
  File.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("admin/file", { files: result, title: "Admin Panel - File" });
  });
};

module.exports.link = (req, res) => {
  Link.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("admin/link", { links: result, title: "Admin Panel - Link" });
  });
};

const Link = require("../models/Link");

module.exports.index = (req, res) => {
  Link.find((err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("link/index", { links: result, title: "Link URL", page_name: "link" });
  });
};

module.exports.create = (req, res) => {
  res.render("link/form", { title: "Create Link URL" });
};

module.exports.store = (req, res) => {
  const { url, title, description } = req.body;
  Link.create(
    {
      url,
      title,
      description,
    },
    (err) => {
      if (err) {
        console.log(err);
        req.flash("error", "Failed create new link url");
      } else {
        req.flash("success", "Successfully create new link url");
      }
      res.redirect("/admin/link");
    }
  );
};

module.exports.edit = (req, res) => {
  Link.findById(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.render("link/form", { data: result, title: "Edit Link URL" });
  });
};

module.exports.update = (req, res) => {
  const { url, title, description } = req.body;
  Link.findByIdAndUpdate(
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
        req.flash("error", "Failed update link url");
      } else {
        req.flash("success", "Successfully update link url");
      }
      res.redirect("/admin/link");
    }
  );
};

module.exports.remove = (req, res) => {
  Link.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
      req.flash("error", "Failed delete link url");
    } else {
      req.flash("success", "Successfully delete link url");
    }
    res.redirect("/admin/link");
  });
};

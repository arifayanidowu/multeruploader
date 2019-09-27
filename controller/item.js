const Item = require("../model/Item");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function(req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + "" + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage: storage }).single("myImage");

exports.upload = (req, res) => {
  const item = new Item();
  upload(req, res, err => {
    if (err) {
      res.render("index", {
        msg: err
      });
    } else {
      console.log(req.file);
      item.img = req.file.filename;
      item
        .save()
        .then(result => res.send({ success: true, result }))
        .catch(err => res.status(500).send({ success: false, err }));
    }
  });
};

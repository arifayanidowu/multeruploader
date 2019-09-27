require("dotenv").config();
const express = require("express");
const item = require("./routes/item");
const app = express();
const fileUpload = require("express-fileupload");
// const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: "./public/uploads",
//   filename: function(req, file, callback) {
//     callback(
//       null,
//       file.fieldname + "-" + Date.now() + "" + path.extname(file.originalname)
//     );
//   }
// });

// const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(multer({ dest: "./uploads" }).single("item"));
// app.use(
//   fileUpload({ limits: { fileSize: 50 * 1024 * 1024 }, abortOnLimit: true })
// );

app.use("/", item);

app.get("/", (req, res) => res.render("index"));

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`[Server] Listening on port ${PORT}`));

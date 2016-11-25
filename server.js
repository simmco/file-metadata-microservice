const express = require('express');
const multer = require('multer');
var upload = multer({dest: null });
const path = require('path');

var app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  res.send({ size: req.file.size});
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

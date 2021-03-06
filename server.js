const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "", "public/")))

port = process.env.PORT || 8081;

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});
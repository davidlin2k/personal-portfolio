require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const db = require('./queries');
const path = require("path");
const rateLimit = require('express-rate-limit');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5001;
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(cors());
app.use('/api/write', limiter);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/api/read/words', db.getWords);

app.post('/api/users/login', db.loginUser);

app.post('/api/write/updateWords', db.updateWords);
app.post('/api/write/submitInquiry', db.submitInquiry);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//app.post('/words', db.updateWords);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
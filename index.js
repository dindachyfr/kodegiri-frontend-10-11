//kindly test on postman https://kodegiri-dinda.herokuapp.com
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bookRoute = require("./src/route/books")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
  });
  
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/books", bookRoute);
// handle error
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode);
  res.json({
    responseCode: statusCode,
    responseMessage: message
  });
});


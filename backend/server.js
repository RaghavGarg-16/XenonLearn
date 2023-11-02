// module imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const {
  authRoute,
  userRoute,
  contactRoute,
} = require("./routes");
const app = express();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const allowedOrigins = [
  "http://localhost:5173",
  "https://wondrous-starburst-6392cd.netlify.app",
  "http://127.0.0.1:5173",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("ok ");
});

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/contact", contactRoute );

// error handles

app.use((err, req, res, next) => {
  const errstatus = err.status || 500;
  const errmsg = err.message || "something went wrong!! ";
  return res.status(errstatus).json({ msg: errmsg });
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log("connected to mongoose");
  } catch (error) {
    console.log("connect()", error);
  }
};

app.listen(process.env.Port || 700, async () => {
  await connect();
  console.log("listening", process.env.Port || 700);
});

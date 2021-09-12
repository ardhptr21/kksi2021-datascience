const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@kksi.mu2ni.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfuly connected to database");
    }
  }
);

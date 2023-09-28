const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Gofood:Gofood.9195@cluster0.jnqldlr.mongodb.net/Gofood";

const mongoDb = async () => {
  await mongoose
    .connect(mongoURI)
    .then(async () => {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection(
        "food_items"
      );
      fetched_data
        .find({})
        .toArray()
        .then((data) => {
          //console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = mongoDb;

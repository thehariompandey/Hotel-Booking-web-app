const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://hariompandey0349:Hari9868@cluster0.uvqme6o.mongodb.net/wanderlust?appName=Cluster0";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); //before initalizing database cleaning all data by deleteing it
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "698db59286f1c8200d839e94",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initalized");
};

initDB();

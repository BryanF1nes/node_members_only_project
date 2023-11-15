require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const mongoDB = process.env.URL;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log('Connection established to mongoose database!');
};

module.exports = main;
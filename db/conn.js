const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB || "mongodb://localhost:27017/Mern_NEW", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`${err} \nno connection`));
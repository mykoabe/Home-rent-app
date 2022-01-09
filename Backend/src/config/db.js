const mongoose = require('mongoose');
const databaseUrl = "mongodb://localhost:27017";

exports.databaseConfiguration = () =>{ 

    mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
    .then(()=>{
        console.log("Database connected successfully!");
    })
    .catch((error)=>{
        console.log(error);
    })

}





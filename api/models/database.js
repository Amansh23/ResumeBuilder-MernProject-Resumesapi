const mongoose = require("mongoose")


exports.getconnection = async function(){
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log("database Connected");

    } catch (error) {
        console.log(error.message)
    }
}

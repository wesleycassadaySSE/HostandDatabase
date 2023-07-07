const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://testuser:1234@mongocluster.75ojhlk.mongodb.net/react-login")

.then(() => {
    console.log("Connected");
})
.catch(() => {
    console.log("Failed");

})

const newSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection
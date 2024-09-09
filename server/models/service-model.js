const { Schema , model } = require("mongoose");

const serviceSchema = new Schema({
    service: { type: String, requried: true },
    description: { type: String, requried: true },
    price:  { type: String, requried: true },
    provider: { type: String, requried: true }, 
});

const Service = new model("Service" , serviceSchema) ;

module.exports = Service ;
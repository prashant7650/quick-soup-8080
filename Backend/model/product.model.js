const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    img:String,
    name:String,
   Title:String,
   Price:Number,
   Rating:Number
    

}
,{

    
    versionKey: false
})

// model for thee data
const productModel = mongoose.model("product",productSchema)

module.exports = {
     productModel
}
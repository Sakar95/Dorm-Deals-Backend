import mongoose from "mongoose"

const Schema= mongoose.Schema

const sellerSchema=new Schema({
    productName:{
        type:String,
        required:true
    },
    productOldPrice:{
        type:Number,
        required:true
    },
    
    productPrice:{
        type:Number,
        required:true
    },

    productDescription:{
        type:String,
        required:true
    },
    providerName:{
        type:String,
        required:true
    },

    providerNumber:{
        type:Number,
        required:true
    },

    pickupLocation:{
        type:String,
        require:true
    }

}
)

const Item =mongoose.model("SellerDetails",sellerSchema)
export default Item;
import SellerDetails from "../models/SellerModel.js"
import mongoose from "mongoose"

const sellItem = async(req,res)=>{
    const {productName,
           productOldPrice,
           productPrice,
           productDescription,
           providerName,
           providerNumber,
           pickupLocation
        }=req.body


    try{
        const item = await SellerDetails({productName,
            productOldPrice,
            productPrice,
            productDescription,
            providerName,
            providerNumber,
            pickupLocation})

            await item.save()
            res.status(200).json(item)
    }    catch(e){
        res.status(400).json({error:e.message})
    }
}

export{sellItem}
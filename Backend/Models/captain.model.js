
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const captainSchema=new mongoose.Schema({
    fullname:{
        firstname: { type: String, required: true },
        lastname: { type: String, required: true }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be at least 3 characters long'],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
        type:String,
        required:true,
        minlength:[3,'Vehicle must be at least 3 characters long'],
    },
    plate:{
        type:String,
        required:true,
        minlength:[3,'Plate must be at least 3 characters long'],
    },
    capacity:{
        type:Number,
        required:true,
        minlength:[1,'Capacity must be at least 1 characters long'],
    },
    vehicleType:{
        type:String,
        required:true,
        enum:['car', 'bike', 'auto'],
    },
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        },
    }
})


captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24H'})
    return token
}
captainSchema.methods.comparePassword=async function(password){ 
    return await bcrypt.compare(password,this.password)
}
captainSchema.methods.hashPassword=async function(password){                                                                                      
    return await bcrypt.hash(password,10);
}   


const captainModel=mongoose.model('captain',captainSchema)
module.exports=captainModel
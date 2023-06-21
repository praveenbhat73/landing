import mongoose from "mongoose";

const User = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
//   id: { type: String },
    country:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        
        // default: "admin",
      },
      

},
{ timestamps: true },
);

export default mongoose.model("User", User);
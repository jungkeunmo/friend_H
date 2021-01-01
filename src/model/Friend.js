import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Friend = new Schema({

    name: {
        type : String,
        required: true,
    },
    school: {
        type : String,
        required: true, 
    },
    age: {
        type : Number,
        required: true,
    },
    grade: {
        type : Number,
        required: true,
    },
},
{versionKey: false});

export default mongoose.model(`Friend`, Friend, `Friend`);
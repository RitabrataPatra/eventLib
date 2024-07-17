import mongoose from 'mongoose';
import { Document } from 'mongoose';
const { Schema, model ,models } = mongoose;

export interface ICategory extends Document{
    _id : string
    name : string
    // description : string
    // imageUrl : string
}

const CategorySchema = new Schema({
    name : {type : String, required : true, unique : true},
    // description : {type : String, required : true},
    // imageUrl : {type : String, required : true},


})  

const Category = models.Category || model('Category',CategorySchema)
export default Category
import mongoose from "mongoose";
import SampleFoodItem from "./SampleFoodItem.js";
export default interface InputFoodFoundation {
    id: Number;
    foodDescription: String;
    inputFood: SampleFoodItem;
}
export declare const InputFoodFoundationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;

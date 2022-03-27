import mongoose from "mongoose";
import SampleFoodItem from "./SampleFoodItem.js";

const { Schema } = mongoose;

export default interface InputFoodFoundation {
    id: Number;
    foodDescription: String;
    inputFood: SampleFoodItem;
}

export const InputFoodFoundationSchema = new Schema({
    id: Number,
    foodDescription: String,
    inputFood: { type: Schema.Types.ObjectId, ref: "SampleFoodItem" }
});

mongoose.model("InputFoodFoundation", InputFoodFoundationSchema);

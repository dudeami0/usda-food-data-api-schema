import mongoose from "mongoose";
import FoodCategory from "./FoodCategory.js";

const { Schema } = mongoose;

export default interface SampleFoodItem {
    fdcId: Number;
    dataType: String;
    description: String;
    foodClass: String;
    publicationDate: String;
    foodAttributes: FoodCategory;
}

export const SampleFoodItemSchema = new Schema({
    fdcId: Number,
    dataType: String,
    description: String,
    foodClass: String,
    publicationDate: String,
    foodAttributes: { type: Schema.Types.ObjectId, ref: "FoodCategory" }
});

mongoose.model("SampleFoodItem", SampleFoodItemSchema);

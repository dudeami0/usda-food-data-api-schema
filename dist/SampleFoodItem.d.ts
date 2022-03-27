import mongoose from "mongoose";
import FoodCategory from "./FoodCategory.js";
export default interface SampleFoodItem {
    fdcId: Number;
    dataType: String;
    description: String;
    foodClass: String;
    publicationDate: String;
    foodAttributes: FoodCategory;
}
export declare const SampleFoodItemSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;

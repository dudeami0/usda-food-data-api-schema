import mongoose from "mongoose";
import AbridgedFoodNutrient from "./AbridgedFoodNutrient.js";
export default interface AbridgedFoodItem {
    dataType: String;
    description: String;
    fdcId: Number;
    foodNutrients: AbridgedFoodNutrient[];
    publicationDate: String;
    gtinUpc: String;
    ndbNumber: String;
    foodCode: String;
}
export declare const AbridgedFoodItemSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;

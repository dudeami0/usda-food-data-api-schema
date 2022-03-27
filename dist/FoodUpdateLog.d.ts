import mongoose from "mongoose";
import FoodAttribute from "./FoodAttribute.js";
export default interface FoodUpdateLog {
    fdcId: Number;
    availableDate: String;
    brandOwner: String;
    dataSource: String;
    dataType: String;
    description: String;
    foodClass: String;
    gtinUpc: String;
    householdServingFullText: String;
    ingredients: String;
    modifiedDate: String;
    publicationDate: String;
    servingSize: Number;
    servingSizeUnit: String;
    brandedFoodCategory: String;
    changes: String;
    foodAttributes: FoodAttribute[];
}
export declare const FoodUpdateLogSchema: mongoose.Schema<FoodUpdateLog, mongoose.Model<FoodUpdateLog, any, any, any>, {}, {}>;

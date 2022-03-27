import mongoose from "mongoose";
import FoodAttribute from "./FoodAttribute.js";

const { Schema } = mongoose;

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

export const FoodUpdateLogSchema = new Schema<FoodUpdateLog>({
    fdcId: Number,
    availableDate: String,
    brandOwner: String,
    dataSource: String,
    dataType: String,
    description: String,
    foodClass: String,
    gtinUpc: String,
    householdServingFullText: String,
    ingredients: String,
    modifiedDate: String,
    publicationDate: String,
    servingSize: Number,
    servingSizeUnit: String,
    brandedFoodCategory: String,
    changes: String,
    foodAttributes: [{ type: Schema.Types.ObjectId, ref: "FoodAttribute" }]
});

mongoose.model("FoodUpdateLog", FoodUpdateLogSchema);

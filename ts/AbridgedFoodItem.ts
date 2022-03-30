import mongoose from "mongoose";
import AbridgedFoodNutrient from "./AbridgedFoodNutrient.js";

const { Schema } = mongoose;

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

export const AbridgedFoodItemSchema = new Schema({
    fdcId: { type: Number, unique: true },
    dataType: String,
    description: String,
    foodNutrients: [
        { type: Schema.Types.ObjectId, ref: "AbridgedFoodNutrient" }
    ],
    publicationDate: String,
    gtinUpc: String,
    ndbNumber: String,
    foodCode: String
});

AbridgedFoodItemSchema.index({ "$**": "text" });

mongoose.model("AbridgedFoodItem", AbridgedFoodItemSchema);

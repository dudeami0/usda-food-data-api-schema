import mongoose from "mongoose";
import FoodCategory from "./FoodCategory.js";
import FoodNutrient from "./FoodNutrient.js";
import NutrientConversionFactors from "./NutrientConversionFactors.js";

const { Schema } = mongoose;

export default interface SRLegacyFoodItem {
    fdcId: Number;
    dataType: String;
    description: String;
    foodClass: String;
    isHistoricalReference: Boolean;
    ndbNumber: String;
    publicationDate: String;
    scientificName: String;
    foodCategory: FoodCategory;
    foodNutrients: FoodNutrient[];
    nutrientConversionFactors: NutrientConversionFactors[];
}

export const SRLegacyFoodItem = new Schema<SRLegacyFoodItem>({
    fdcId: { type: Number, unique: true },
    dataType: String,
    description: String,
    foodClass: String,
    isHistoricalReference: Boolean,
    ndbNumber: String,
    publicationDate: String,
    scientificName: String,
    foodCategory: { type: Schema.Types.ObjectId, ref: "FoodCategory" },
    foodNutrients: [{ type: Schema.Types.ObjectId, ref: "FoodNutrient" }],
    nutrientConversionFactors: [
        { type: Schema.Types.ObjectId, ref: "NutrientConversionFactors" }
    ]
});

SRLegacyFoodItem.index({ "$**": "text" });

mongoose.model("SRLegacyFoodItem", SRLegacyFoodItem);

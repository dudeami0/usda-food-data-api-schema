import mongoose from "mongoose";
import FoodCategory from "./FoodCategory.js";
import FoodComponent from "./FoodComponent.js";
import FoodNutrient from "./FoodNutrient.js";
import FoodPortion from "./FoodPortion.js";
import InputFoodFoundation from "./InputFoodFoundation.js";
import NutrientConversionFactors from "./NutrientConversionFactors.js";

const { Schema } = mongoose;

export default interface FoundationFoodItem {
    fdcId: Number;
    dataType: String;
    description: String;
    foodClass: String;
    footNote: String;
    isHistoricalReference: Boolean;
    ndbNumber: String;
    publicationDate: String;
    scientificName: String;
    foodCategory: FoodCategory;
    foodComponents: FoodComponent[];
    foodNutrients: FoodNutrient[];
    foodPortions: FoodPortion[];
    inputFoods: InputFoodFoundation[];
    nutrientConversionFactors: NutrientConversionFactors[];
}

export const FoundationFoodItemSchema = new Schema<FoundationFoodItem>({
    fdcId: { type: Number, unique: true },
    dataType: String,
    description: String,
    foodClass: String,
    footNote: String,
    isHistoricalReference: Boolean,
    ndbNumber: String,
    publicationDate: String,
    scientificName: String,
    foodCategory: { type: Schema.Types.ObjectId, ref: "FoodCategory" },
    foodComponents: [{ type: Schema.Types.ObjectId, ref: "FoodComponent" }],
    foodNutrients: [{ type: Schema.Types.ObjectId, ref: "FoodNutrient" }],
    foodPortions: [{ type: Schema.Types.ObjectId, ref: "FoodPortion" }],
    inputFoods: [{ type: Schema.Types.ObjectId, ref: "InputFoodFoundation" }],
    nutrientConversionFactors: [
        { type: Schema.Types.ObjectId, ref: "NutrientConversionFactors" }
    ]
});

FoundationFoodItemSchema.index({ "$**": "text" });

mongoose.model("FoundationFoodItem", FoundationFoodItemSchema);

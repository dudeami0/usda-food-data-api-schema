import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoundationFoodItemSchema = new Schema({
    fdcId: Number,
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
mongoose.model("FoundationFoodItem", FoundationFoodItemSchema);
//# sourceMappingURL=FoundationFoodItem.js.map
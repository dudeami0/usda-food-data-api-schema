import mongoose from "mongoose";
const { Schema } = mongoose;
export const SRLegacyFoodItem = new Schema({
    fdcId: Number,
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
mongoose.model("SRLegacyFoodItem", SRLegacyFoodItem);
//# sourceMappingURL=SRLegacyFoodItem.js.map
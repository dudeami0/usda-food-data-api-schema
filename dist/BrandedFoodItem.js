import mongoose from "mongoose";
const { Schema } = mongoose;
export const BrandedFoodItemSchema = new Schema({
    fdcId: Number,
    availableDate: String,
    brandName: String,
    subbrandName: String,
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
    marketCountry: String,
    packageWeight: String,
    servingSize: Number,
    servingSizeUnit: String,
    brandedFoodCategory: String,
    foodAttributes: [{ type: Schema.Types.ObjectId, ref: "FoodAttribute" }],
    foodNutrients: [{ type: Schema.Types.ObjectId, ref: "FoodNutrient" }],
    foodUpdateLog: [{ type: Schema.Types.ObjectId, ref: "FoodUpdateLog" }],
    labelNutrients: { type: Schema.Types.ObjectId, ref: "LabelNutrients" }
});
mongoose.model("BrandedFoodItem", BrandedFoodItemSchema);
//# sourceMappingURL=BrandedFoodItem.js.map
import mongoose from "mongoose";
const { Schema } = mongoose;
export const FoodUpdateLogSchema = new Schema({
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
//# sourceMappingURL=FoodUpdateLog.js.map
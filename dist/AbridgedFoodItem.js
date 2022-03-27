import mongoose from "mongoose";
const { Schema } = mongoose;
export const AbridgedFoodItemSchema = new Schema({
    dataType: String,
    description: String,
    fdcId: Number,
    foodNutrients: [
        { type: Schema.Types.ObjectId, ref: "AbridgedFoodNutrient" }
    ],
    publicationDate: String,
    gtinUpc: String,
    ndbNumber: String,
    foodCode: String
});
mongoose.model("AbridgedFoodItem", AbridgedFoodItemSchema);
//# sourceMappingURL=AbridgedFoodItem.js.map
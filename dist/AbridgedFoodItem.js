import mongoose from "mongoose";
const { Schema } = mongoose;
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
//# sourceMappingURL=AbridgedFoodItem.js.map
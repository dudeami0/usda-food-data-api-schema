import mongoose from "mongoose";
const { Schema } = mongoose;
export const SurveyFoodItemSchema = new Schema({
    fdcId: { type: Number, unique: true },
    datatype: String,
    description: String,
    endDate: String,
    foodClass: String,
    publicationDate: String,
    startDate: String,
    foodAttributes: [{ type: Schema.Types.ObjectId, ref: "FoodAttribute" }],
    foodPortions: [{ type: Schema.Types.ObjectId, ref: "FoodPortion" }],
    inputFoods: [{ type: Schema.Types.ObjectId, ref: "InputFoodSurvey" }],
    wweiaFoodCategory: { type: Schema.Types.ObjectId, ref: "WweiaFoodCategory" }
});
SurveyFoodItemSchema.index({ "$**": "text" });
mongoose.model("SurveyFoodItem", SurveyFoodItemSchema);
//# sourceMappingURL=SurveyFoodItem.js.map
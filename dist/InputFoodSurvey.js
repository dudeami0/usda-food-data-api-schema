import mongoose from "mongoose";
const { Schema } = mongoose;
export const InputFoodSurveySchema = new Schema({
    id: Number,
    amount: Number,
    foodDescription: String,
    ingredientCode: Number,
    ingredientDescription: String,
    ingredientWeight: Number,
    portionCode: String,
    portionDescription: String,
    sequenceNumber: Number,
    surveyFlag: Number,
    inputFood: {},
    retentionFactor: { type: Schema.Types.ObjectId, ref: "RetentionFactor" }
});
mongoose.model("InputFoodSurvey", InputFoodSurveySchema);
//# sourceMappingURL=InputFoodSurvey.js.map
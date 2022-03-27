import mongoose from "mongoose";
import RetentionFactor from "./RetentionFactor.js";

const { Schema } = mongoose;

export default interface InputFoodSurvey {
    id: Number;
    amount: Number;
    foodDescription: String;
    ingredientCode: Number;
    ingredientDescription: String;
    ingredientWeight: Number;
    portionCode: String;
    portionDescription: String;
    sequenceNumber: Number;
    surveyFlag: Number;
    inputFood: {};
    retentionFactor: RetentionFactor;
}

export const InputFoodSurveySchema = new Schema<InputFoodSurvey>({
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

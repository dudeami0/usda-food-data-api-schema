import mongoose from "mongoose";
import RetentionFactor from "./RetentionFactor.js";
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
export declare const InputFoodSurveySchema: mongoose.Schema<InputFoodSurvey, mongoose.Model<InputFoodSurvey, any, any, any>, {}, {}>;

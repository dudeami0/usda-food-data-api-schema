import mongoose from "mongoose";
import FoodAttribute from "./FoodAttribute.js";
import FoodPortion from "./FoodPortion.js";
import InputFoodSurvey from "./InputFoodSurvey.js";
import WweiaFoodCategory from "./WweiaFoodCategory.js";
export default interface SurveyFoodItem {
    fdcId: Number;
    datatype: String;
    description: String;
    endDate: String;
    foodClass: String;
    publicationDate: String;
    startDate: String;
    foodAttributes: FoodAttribute[];
    foodPortions: FoodPortion[];
    inputFoods: InputFoodSurvey[];
    wweiaFoodCategory: WweiaFoodCategory;
}
export declare const SurveyFoodItemSchema: mongoose.Schema<SurveyFoodItem, mongoose.Model<SurveyFoodItem, any, any, any>, {}, {}>;

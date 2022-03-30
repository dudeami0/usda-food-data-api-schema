import mongoose from "mongoose";
import FoodAttribute from "./FoodAttribute.js";
import FoodPortion from "./FoodPortion.js";
import InputFoodSurvey from "./InputFoodSurvey.js";
import WweiaFoodCategory from "./WweiaFoodCategory.js";

const { Schema } = mongoose;

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

export const SurveyFoodItemSchema = new Schema<SurveyFoodItem>({
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

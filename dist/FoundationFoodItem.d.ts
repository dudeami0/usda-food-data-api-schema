import mongoose from "mongoose";
import FoodCategory from "./FoodCategory.js";
import FoodComponent from "./FoodComponent.js";
import FoodNutrient from "./FoodNutrient.js";
import FoodPortion from "./FoodPortion.js";
import InputFoodFoundation from "./InputFoodFoundation.js";
import NutrientConversionFactors from "./NutrientConversionFactors.js";
export default interface FoundationFoodItem {
    fdcId: Number;
    dataType: String;
    description: String;
    foodClass: String;
    footNote: String;
    isHistoricalReference: Boolean;
    ndbNumber: String;
    publicationDate: String;
    scientificName: String;
    foodCategory: FoodCategory;
    foodComponents: FoodComponent[];
    foodNutrients: FoodNutrient[];
    foodPortions: FoodPortion[];
    inputFoods: InputFoodFoundation[];
    nutrientConversionFactors: NutrientConversionFactors[];
}
export declare const FoundationFoodItemSchema: mongoose.Schema<FoundationFoodItem, mongoose.Model<FoundationFoodItem, any, any, any>, {}, {}>;

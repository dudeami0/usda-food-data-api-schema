import mongoose from "mongoose";
import FoodCategory from "./FoodCategory.js";
import FoodNutrient from "./FoodNutrient.js";
import NutrientConversionFactors from "./NutrientConversionFactors.js";
export default interface SRLegacyFoodItem {
    fdcId: Number;
    dataType: String;
    description: String;
    foodClass: String;
    isHistoricalReference: Boolean;
    ndbNumber: String;
    publicationDate: String;
    scientificName: String;
    foodCategory: FoodCategory;
    foodNutrients: FoodNutrient[];
    nutrientConversionFactors: NutrientConversionFactors[];
}
export declare const SRLegacyFoodItem: mongoose.Schema<SRLegacyFoodItem, mongoose.Model<SRLegacyFoodItem, any, any, any>, {}, {}>;

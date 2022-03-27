import mongoose from "mongoose";
import MeasureUnit from "./MeasureUnit.js";
export default interface FoodPortion {
    id: Number;
    amount: Number;
    dataPoints: Number;
    gramWeight: Number;
    minYearAcquired: Number;
    modifier: String;
    portionDescription: String;
    sequenceNumber: Number;
    measureUnit: MeasureUnit;
}
export declare const FoodPortionSchema: mongoose.Schema<FoodPortion, mongoose.Model<FoodPortion, any, any, any>, {}, {}>;

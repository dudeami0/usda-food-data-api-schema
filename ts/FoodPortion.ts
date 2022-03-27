import mongoose from "mongoose";
import MeasureUnit from "./MeasureUnit.js";

const { Schema } = mongoose;

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

export const FoodPortionSchema = new Schema<FoodPortion>({
    id: Number,
    amount: Number,
    dataPoints: Number,
    gramWeight: Number,
    minYearAcquired: Number,
    modifier: String,
    portionDescription: String,
    sequenceNumber: Number,
    measureUnit: { type: Schema.Types.ObjectId, ref: "MeasureUnit" }
});

mongoose.model("FoodPortion", FoodPortionSchema);

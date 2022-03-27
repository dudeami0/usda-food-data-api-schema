import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface FoodComponent {
    id: Number;
    name: String;
    dataPoints: Number;
    gramWeight: Number;
    isRefuse: Boolean;
    minYearAcquired: Number;
    percentWeight: Number;
}

export const FoodComponentSchema = new Schema({
    id: Number,
    name: String,
    dataPoints: Number,
    gramWeight: Number,
    isRefuse: Boolean,
    minYearAcquired: Number,
    percentWeight: Number
});

mongoose.model("FoodComponent", FoodComponentSchema);

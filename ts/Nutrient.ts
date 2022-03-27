import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface Nutrient {
    id: Number;
    number: String;
    name: String;
    rank: Number;
    unitName: String;
}

export const NutrientSchema = new Schema<Nutrient>({
    id: Number,
    number: String,
    name: String,
    rank: Number,
    unitName: String
});

mongoose.model("Nutrient", NutrientSchema);

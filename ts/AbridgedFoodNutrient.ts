import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface AbridgedFoodNutrient {
    number: Number;
    name: String;
    amount: Number;
    unitName: String;
    derivationCode: String;
    derivationDescription: String;
}

export const AbridgedFoodNutrientSchema = new Schema({
    number: Number,
    name: String,
    amount: Number,
    unitName: String,
    derivationCode: String,
    derivationDescription: String
});

mongoose.model("AbridgedFoodNutrient", AbridgedFoodNutrientSchema);

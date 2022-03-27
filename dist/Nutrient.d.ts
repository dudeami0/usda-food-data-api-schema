import mongoose from "mongoose";
export default interface Nutrient {
    id: Number;
    number: String;
    name: String;
    rank: Number;
    unitName: String;
}
export declare const NutrientSchema: mongoose.Schema<Nutrient, mongoose.Model<Nutrient, any, any, any>, {}, {}>;

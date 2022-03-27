import mongoose from "mongoose";
export default interface AbridgedFoodNutrient {
    number: Number;
    name: String;
    amount: Number;
    unitName: String;
    derivationCode: String;
    derivationDescription: String;
}
export declare const AbridgedFoodNutrientSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;

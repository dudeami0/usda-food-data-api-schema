import mongoose from "mongoose";
export default interface FoodCategory {
    id: Number;
    code: String;
    description: String;
}
export declare const FoodCategorySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;

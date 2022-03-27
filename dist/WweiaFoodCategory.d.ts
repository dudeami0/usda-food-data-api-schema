import mongoose from "mongoose";
export default interface WweiaFoodCategory {
    wweiaFoodCategoryCode: Number;
    wweiaFoodCategoryDescription: String;
}
export declare const WweiaFoodCategorySchema: mongoose.Schema<WweiaFoodCategory, mongoose.Model<WweiaFoodCategory, any, any, any>, {}, {}>;

import mongoose from "mongoose";
export default interface FoodAttributeType {
    id: Number;
    name: String;
    description: String;
}
export declare const FoodAttributeTypeSchema: mongoose.Schema<FoodAttributeType, mongoose.Model<FoodAttributeType, any, any, any>, {}, {}>;

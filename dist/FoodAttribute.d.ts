import mongoose from "mongoose";
import FoodAttributeType from "./FoodAttributeType.js";
export default interface FoodAttribute {
    id: Number;
    sequenceNumber: Number;
    value: String;
    foodAttributeType: FoodAttributeType;
}
export declare const FoodAttributeSchema: mongoose.Schema<FoodAttribute, mongoose.Model<FoodAttribute, any, any, any>, {}, {}>;

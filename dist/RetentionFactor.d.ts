import mongoose from "mongoose";
export default interface RetentionFactor {
    id: Number;
    code: Number;
    description: String;
}
export declare const RetentionFactorSchema: mongoose.Schema<RetentionFactor, mongoose.Model<RetentionFactor, any, any, any>, {}, {}>;

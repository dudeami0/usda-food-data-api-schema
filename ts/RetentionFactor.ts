import mongoose from "mongoose";

const { Schema } = mongoose;

export default interface RetentionFactor {
    id: Number;
    code: Number;
    description: String;
}

export const RetentionFactorSchema = new Schema<RetentionFactor>({
    id: Number,
    code: Number,
    description: String
});

mongoose.model("RetentionFactor", RetentionFactorSchema);

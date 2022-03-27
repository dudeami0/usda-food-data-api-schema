import mongoose from "mongoose";
const { Schema } = mongoose;
export const RetentionFactorSchema = new Schema({
    id: Number,
    code: Number,
    description: String
});
mongoose.model("RetentionFactor", RetentionFactorSchema);
//# sourceMappingURL=RetentionFactor.js.map
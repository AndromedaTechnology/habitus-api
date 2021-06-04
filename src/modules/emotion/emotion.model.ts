import mongoose, { Schema } from "mongoose";

export class EmotionDto {
    _id?: mongoose.Types.ObjectId;
    slug?: string;
    emoji?: string;
    name?: string;
    createdAt?: Date;
}

const emotionSchema = new Schema({
    slug: {
        type: String,
        required: false
    },
    emoji: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const emotionModel = mongoose.model('Emotion', emotionSchema);

export default emotionModel;
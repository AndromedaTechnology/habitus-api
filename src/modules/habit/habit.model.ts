import mongoose, { Schema } from "mongoose";

export class HabitDto {
    _id?: mongoose.Types.ObjectId;
    name?: string;
    emoji?: string;
    isGood?: boolean;
    createdAt?: Date;
}

const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emoji: {
        type: String,
        required: false
    },
    isGood: {
        type: Boolean,
        required: false,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const habitModel = mongoose.model('Habit', habitSchema);

export default habitModel;
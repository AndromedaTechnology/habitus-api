import mongoose, { Schema } from "mongoose";

export class HabitDto {
    _id?: mongoose.Types.ObjectId;
    name?: string;
    createdAt?: Date;
}

const habitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const habitModel = mongoose.model('Habit', habitSchema);

export default habitModel;
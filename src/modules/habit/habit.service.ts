import mongoose from 'mongoose';
import habitModel, { HabitDto } from "./habit.model";

class HabitService {
  async findAll(): Promise<Array<HabitDto>> {
    const items = await habitModel.find();
    return items;
  }

  async find(id: mongoose.Types.ObjectId): Promise<HabitDto> {
    const item = await habitModel.findById(id);
    return item;
  }

  async create(data: HabitDto): Promise<HabitDto> {
    const item = await habitModel.create(data);
    return item;
  }

  async update(id: mongoose.Types.ObjectId, data: HabitDto): Promise<HabitDto> {
    const item = await habitModel.findByIdAndUpdate(id, data, {
      new: true
    });
    return item;
  }

  async delete(id: mongoose.Types.ObjectId): Promise<HabitDto> {
    const item = await habitModel.findByIdAndRemove(id);
    return item;
  }
}

export default new HabitService();

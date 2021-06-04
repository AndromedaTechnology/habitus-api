import mongoose from 'mongoose';
import emotionModel, { EmotionDto } from "./emotion.model";

class EmotionService {
  async findAll(): Promise<Array<EmotionDto>> {
    const items = await emotionModel.find();
    return items;
  }

  async find(id: mongoose.Types.ObjectId): Promise<EmotionDto> {
    const item = await emotionModel.findById(id);
    return item;
  }

  async create(data: EmotionDto): Promise<EmotionDto> {
    const item = await emotionModel.create(data);
    return item;
  }

  async update(id: mongoose.Types.ObjectId, data: EmotionDto): Promise<EmotionDto> {
    const item = await emotionModel.findByIdAndUpdate(id, data, {
      new: true
    });
    return item;
  }

  async delete(id: mongoose.Types.ObjectId): Promise<EmotionDto> {
    const item = await emotionModel.findByIdAndRemove(id);
    return item;
  }
}

export default new EmotionService();

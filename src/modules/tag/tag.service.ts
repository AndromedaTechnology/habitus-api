import mongoose from "mongoose";
import tagModel, { TagDto } from "./tag.model";

class TagService {
  async findAll(): Promise<Array<TagDto>> {
    const items = await tagModel.find();
    return items;
  }

  async find(id: mongoose.Types.ObjectId): Promise<TagDto> {
    const item = await tagModel.findById(id);
    return item;
  }

  async create(data: TagDto): Promise<TagDto> {
    const item = await tagModel.create(data);
    return item;
  }

  async update(id: mongoose.Types.ObjectId, data: TagDto): Promise<TagDto> {
    const item = await tagModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return item;
  }

  async delete(id: mongoose.Types.ObjectId): Promise<TagDto> {
    const item = await tagModel.findByIdAndRemove(id);
    return item;
  }
}

export default new TagService();
